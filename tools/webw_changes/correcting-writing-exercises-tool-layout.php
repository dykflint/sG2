<?php

/**
 * Provide a public-facing view for the plugin
 *
 * This file is used to markup the public-facing aspects of the plugin.
 *
 * @link       https://webw.us
 * @since      1.0.0
 *
 * @package    Correcting_Writing_Exercises_Tool
 * @subpackage Correcting_Writing_Exercises_Tool/public/partials
 */
//check and then change it from camel case to snakecase
$imgs_url = CORRECTING_WRITING_EXERCISES_TOOL_URL . 'public/front/build/images/'
?>
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title><?php esc_html_e('Correction Tool'); ?></title>

	<?php do_action('correcting_writing_styles'); ?>
	<link rel="preconnect" href="<?php echo esc_url('https://fonts.googleapis.com'); ?>">
	<link rel="preconnect" href="<?php echo esc_url('https://fonts.gstatic.com'); ?>" crossorigin>
	<link href="<?php echo esc_url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap'); ?>" rel="stylesheet">
	<link href="<?php echo esc_url($imgs_url . 'check.svg'); ?>" rel="preload" as="image">
	<link href="<?php echo esc_url($imgs_url . 'error.svg'); ?>" rel="preload" as="image">
	<?php echo wp_custom_css_cb(); ?>

</head>

<body>
	<main>
		<div class="corrector__cols-wrapper">
			<div class="corrector__form-wrapper">
				<form class="corrector" id="corrector">
					<!-- Start Controls -->
					<div class="corrector__controls">
						<p class="corrector__control corrector__wrong-count-wrapper" title="Number of mistakes" aria-hidden="true" aria-labledby="Number of mistakes" aria-describedby="wrong-count">
							<span><?php echo __('Mistakes:','correcting-writing-exercises-tool'); ?>&nbsp;</span>
							<span id="wrong-count" class="corrector__wrong-count">0</span>
						</p>
						<div class="corrector__controls__main">
							<p aria-hidden="true" class="corrector__control corrector__words">
								<span class="corrector__words-num corrector__num">0</span><span class="corrector__words-num-unit"><?php echo __('words', 'correcting-writing-exercises-tool'); ?></span>
							</p>
							<button type="button" class="corrector__control corrector__control-btn corrector__copy-btn" title="Copy">
								<?php echo __('Copy','correcting-writing-exercises-tool'); ?>
								<div class="corrector__copy-tooltip" role="alert"><?php esc_html_e('Copied'); ?></div>
							</button>
						</div>
					</div>
					<!-- End Controls -->

					<!-- Edit Inputs -->
					<div id="user-editor" class="corrector__editor corrector__editor--user" aira-describedby="corrector-extra-info"></div>

					<!-- Start Actions -->
					<div class="corrector__actions">
						<button type="button" class="corrector__action-btn tool-btn tool-btn--secondary corrector__show-answer-btn"><?php esc_html_e('Show Answer'); ?></button>
						<button type="submit" class="corrector__action-btn tool-btn tool-btn--primary corrector__check-btn"><?php echo __('Check','correcting-writing-exercises-tool'); ?>
							<div class="corrector__check-spinner">
								<div class="lds-ripple"><div></div><div></div></div>
							</div>
						</button>
					</div>
					<!-- End Actions -->
				</form>
			</div>
			<div class="corrector__correct-answer-wrapper">
				<div class="corrector__controls corrector__controls--correct-answer">
					<button type="button" class="corrector__control-btn corrector__hide-answer-btn-x" title="Hide correct answer" aria-label="Hide correct answer"><img src="<?php echo $imgs_url . 'close.svg'; ?>" alt=""></button>
				</div>
				<div id="correct-editor" class="corrector__editor corrector__editor--correct"></div>
				<!-- Actions -->
				<div class="corrector__actions">
					<button type="button" class="corrector__action-btn tool-btn tool-btn--tertiary corrector__hide-answer-btn shake-horizontal shake-constant shake-freeze"><?php echo __('Hide to Continue', 'correcting-writing-exercises-tool'); ?></button>
				</div>
			</div>
		</div>
		<div class="corrector__alerts-wrapper"></div>
		<textarea lang="de-DE" aria-hidden="true" class="corrector__copy-container"></textarea>
	</main>

	<!-- Templates -->
	<template id="editable-template">
		<mark class="corrector__mark">
			<div class="corrector__editable" contenteditable="true"></div>
		</mark>
	</template>

	<template id="correct-answer-template">
		<mark class="corrector__mark corrector__mark--correct"></mark>
	</template>

	<template id="success-alert-template">
		<div class="alert alert--success">
			<img role="presentation" src="<?php echo esc_url($imgs_url . 'check.svg'); ?>" class="alert__img" alt="">
			<p class="alert__message"></p>
		</div>
	</template>

	<template id="fail-alert-template">
		<div class="alert alert--fail">
			<img role="presentation" src="<?php echo esc_url($imgs_url . 'error.svg'); ?>" class="alert__img" alt="">
			<p class="alert__message"></p>
		</div>
	</template>

	<template id="space-template">
		<span class="corrector__space"></span>
	</template>

	<template id="newline-template">
		<span class="corrector__newline">

		</span>
	</template>

	<template id="word-template">
		<span class="corrector__word"></span>
	</template>

	<template id="wrong-word-template">
		<span class="corrector__word corrector__word--wrong"></span>
	</template>

	<template id="sentence-template">
		<span class="corrector__sentence"></span>
	</template>

	<template id="placeholder-template">
		<div id="user-editor-placeholder" class="corrector__placeholder">
			<p class="corrector__placeholder__desc">Write your text here.</p>
			<ul class="corrector__placeholder__umlauts-list">
				<li class="corrector__placeholder__umlaut">a/ = ä</li>
				<li class="corrector__placeholder__umlaut">o/ = ö</li>
				<li class="corrector__placeholder__umlaut">u/ = ü</li>
				<li class="corrector__placeholder__umlaut">s/ = ß</li>
			</ul>
		</div>
	</template>
		
	<?php

	do_action('correcting_writing_scripts');

	?>

	<script>
		window.Userback = window.Userback || {};
		Userback.access_token = '4926|60534|02vtZDiPJdjBQPV4fASFmma1Hxv7vs2N2o5GBbb65XcHwFij1T';
		(function(d) {
			var s = d.createElement('script');
			s.async = true;
			s.src = 'https://static.userback.io/widget/v1.js';
			(d.head || d.body).appendChild(s);
		})(document);
	</script>

</body>

</html>
