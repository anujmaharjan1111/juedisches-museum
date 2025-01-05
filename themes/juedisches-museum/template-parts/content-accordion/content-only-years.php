<div class="date">
    <?php
    if( have_rows( '_genacc_years' ) ) {
        ?>
        <ul class="d-flex flex-wrap">
            <?php
            while( have_rows( '_genacc_years' ) ) {
                the_row();
                $file = get_sub_field( '_gya_yearlink' );
                ?>
                <li>
                    <a href="<?php echo $file['url']; ?>" target="_blank"><?php echo $file['title']; ?></a>
                </li>
                <?php
            } // endwhile _genacc_years
            ?>
        </ul>
        <?php
    } // endif _genacc_years
    ?>
</div>