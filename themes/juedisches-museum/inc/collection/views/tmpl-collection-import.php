<?php add_thickbox(); ?>
<div style="padding:40px 0px">
    <button id="collection-import-btn" type="button" class="button button-primary button-large">Import Collection</button>
    <div id="processing-stats" style="display:none"></div>
    <div class="w3-light-grey">
        <!-- <div class="w3-container w3-blue" style="width:75%">75%</div> -->
    </div>
    <br>
</div>

<div id="my-content-id" style="display:none;">
    <div id="import-stats" class="import-stats"></div>
    <button class="button button-success button-large" type="button" onclick="tb_remove();">Ok</button>
</div>


<style>
    #TB_window {
        max-width:400px!important;
    }
    #TB_window {
        max-height:400px!important;
    }
</style>