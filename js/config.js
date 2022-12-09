
export default {

	width: 960,
	height: 700,

	margin: 0.04,

	minScale: 0.2,
	maxScale: 2.0,

	controls: true,

	controlsTutorial: true,

	controlsLayout: 'bottom-right',

	controlsBackArrows: 'faded',


	progress: true,

	slideNumber: false,

	showSlideNumber: 'all',

	hashOneBasedIndex: false,

	hash: false,

	respondToHashChanges: true,

	history: false,

	keyboard: true,

	keyboardCondition: null,

	disableLayout: false,

	overview: true,

	center: true,

	touch: true,

	loop: false,

	rtl: false,

	navigationMode: 'default',

	shuffle: false,

	fragments: true,
	
	fragmentInURL: true,

	embedded: false,

	help: true,

	pause: true,

	showNotes: false,

	// Flags if slides with data-visibility="hidden" should be kep visible
	showHiddenSlides: false,

	// Global override for autoplaying embedded media (video/audio/iframe)
	// - null:   Media will only autoplay if data-autoplay is present
	// - true:   All media will autoplay, regardless of individual setting
	// - false:  No media will autoplay, regardless of individual setting
	autoPlayMedia: null,

	// Global override for preloading lazy-loaded iframes
	// - null:   Iframes with data-src AND data-preload will be loaded when within
	//           the viewDistance, iframes with only data-src will be loaded when visible
	// - true:   All iframes with data-src will be loaded when within the viewDistance
	// - false:  All iframes with data-src will be loaded only when visible
	preloadIframes: null,

	// Can be used to globally disable auto-animation
	autoAnimate: true,

	// Optionally provide a custom element matcher that will be
	// used to dictate which elements we can animate between.
	autoAnimateMatcher: null,

	// Default settings for our auto-animate transitions, can be
	// overridden per-slide or per-element via data arguments
	autoAnimateEasing: 'ease',
	autoAnimateDuration: 1.0,
	autoAnimateUnmatched: true,

	// CSS properties that can be auto-animated. Position & scale
	// is matched separately so there's no need to include styles
	// like top/right/bottom/left, width/height or margin.
	autoAnimateStyles: [
		'opacity',
		'color',
		'background-color',
		'padding',
		'font-size',
		'line-height',
		'letter-spacing',
		'border-width',
		'border-color',
		'border-radius',
		'outline',
		'outline-offset'
	],

	// Controls automatic progression to the next slide
	// - 0:      Auto-sliding only happens if the data-autoslide HTML attribute
	//           is present on the current slide or fragment
	// - 1+:     All slides will progress automatically at the given interval
	// - false:  No auto-sliding, even if data-autoslide is present
	autoSlide: 0,

	// Stop auto-sliding after user input
	autoSlideStoppable: true,

	// Use this method for navigation when auto-sliding (defaults to navigateNext)
	autoSlideMethod: null,

	// Specify the average time in seconds that you think you will spend
	// presenting each slide. This is used to show a pacing timer in the
	// speaker view
	defaultTiming: null,

	// Enable slide navigation via mouse wheel
	mouseWheel: false,

	// Opens links in an iframe preview overlay
	// Add `data-preview-link` and `data-preview-link="false"` to customise each link
	// individually
	previewLinks: false,

	// Exposes the reveal.js API through window.postMessage
	postMessage: true,

	// Dispatches all reveal.js events to the parent window through postMessage
	postMessageEvents: false,

	// Focuses body when page changes visibility to ensure keyboard shortcuts work
	focusBodyOnPageVisibilityChange: true,

	// Transition style
	transition: 'slide', // none/fade/slide/convex/concave/zoom

	// Transition speed
	transitionSpeed: 'default', // default/fast/slow

	// Transition style for full page slide backgrounds
	backgroundTransition: 'fade', // none/fade/slide/convex/concave/zoom

	// Parallax background image
	parallaxBackgroundImage: '', // CSS syntax, e.g. "a.jpg"

	// Parallax background size
	parallaxBackgroundSize: '', // CSS syntax, e.g. "3000px 2000px"

	// Parallax background repeat
	parallaxBackgroundRepeat: '', // repeat/repeat-x/repeat-y/no-repeat/initial/inherit

	// Parallax background position
	parallaxBackgroundPosition: '', // CSS syntax, e.g. "top left"

	// Amount of pixels to move the parallax background per slide step
	parallaxBackgroundHorizontal: null,
	parallaxBackgroundVertical: null,

	// The maximum number of pages a single slide can expand onto when printing
	// to PDF, unlimited by default
	pdfMaxPagesPerSlide: Number.POSITIVE_INFINITY,

	// Prints each fragment on a separate slide
	pdfSeparateFragments: true,

	// Offset used to reduce the height of content within exported PDF pages.
	// This exists to account for environment differences based on how you
	// print to PDF. CLI printing options, like phantomjs and wkpdf, can end
	// on precisely the total height of the document whereas in-browser
	// printing has to end one pixel before.
	pdfPageHeightOffset: -1,

	// Number of slides away from the current that are visible
	viewDistance: 3,

	// Number of slides away from the current that are visible on mobile
	// devices. It is advisable to set this to a lower number than
	// viewDistance in order to save resources.
	mobileViewDistance: 2,

	// The display mode that will be used to show slides
	display: 'block',

	// Hide cursor if inactive
	hideInactiveCursor: true,

	// Time before the cursor is hidden (in ms)
	hideCursorTime: 5000,

	// Script dependencies to load
	dependencies: [],

	// Plugin objects to register and use for this presentation
	plugins: []

}