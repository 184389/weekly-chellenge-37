<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title><?php wp_title(''); ?></title>
    <?php wp_head(); ?>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link href="https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700" rel="stylesheet">
    <link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/css/styles.css">
</head>
<body <?php body_class(); ?>>