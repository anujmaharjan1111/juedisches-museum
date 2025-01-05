jQuery(document).ready(function ($) {
    var coll_inserted, coll_updated, coll_failed, total_to_import;

    $("#collection-import-btn").on("click", function (e) {
        coll_inserted = 0;
        coll_updated = 0;
        coll_failed = 0;
        setButtonLoadingState(true);
        jQuery.ajax({
            type: "post",
            dataType: "json",
            url: collection_importer.ajaxurl,
            data: {
                action: "check_before_import_collections_xml",
                nonce: collection_importer.import_collection_xml_nonce
            },
            success: function (response) {
                if (typeof response.status != 'undefined') {
                    if (response.status == 1) {
                        total_to_import = response.data.total_collection;
                        $("#processing-stats").html("<h2>Importing "+total_to_import+" collection items</h2>");
                        $("#processing-stats").show();
                        executeImportFunctionByAjaxCall(0);
                    } else {
                        alert("Something Went Wrong, please try again later.");
                    }
                }
                console.log(response);
            },
            error: function (request, status, error) {
                console.log(error);
                setButtonLoadingState(false);
                alert("Something Went Wrong, please try again later.");
            }
        });
        // executeImportFunctionByAjaxCall(0);
    });

    function executeImportFunctionByAjaxCall(collection_offset = 0) {
        jQuery.ajax({
            type: "post",
            dataType: "json",
            url: collection_importer.ajaxurl,
            data: {
                action: "import_collections_xml",
                nonce: collection_importer.import_collection_xml_nonce,
                offset: collection_offset
            },
            success: function (response) {
                if (typeof response.status != 'undefined') {
                    if (response.status == 1) {
                        coll_inserted += response.data.inserted;
                        coll_updated += response.data.updated;
                        coll_failed += response.data.failed;
                        var total_completed = coll_inserted + coll_updated + coll_failed;
                        $("#processing-stats").html("<h2>Importing : "+total_completed+"/"+total_to_import+" Completed</h2>");
                        if (response.data.completed == 1) {
                            setButtonLoadingState(false);
                            $("#import-stats").html("");
                            $("#import-stats").append("<p>Inserted:" + coll_inserted + "</p>");
                            $("#import-stats").append("<p>Updated:" + coll_updated + "</p>");
                            $("#import-stats").append("<p>Failed:" + coll_failed + "</p>");
                            tb_show(response.message, "#TB_inline?inlineId=my-content-id", false);
                        } else {
                            executeImportFunctionByAjaxCall(response.data.offset);
                        }
                    }
                }
                console.log(response);
            },
            error: function (request, status, error) {
                console.log(error);
                setButtonLoadingState(false);
                alert("Something Went Wrong, please try again later.");
            }
        });
    }

    function setButtonLoadingState(is_loading = false) {
        if (is_loading == true) {
            $("#collection-import-btn").html("Importing <i class=\"fa fa-spinner fa-spin\"></i>");
        } else {
            $("#collection-import-btn").html("Import Collection");
        }
    }

});