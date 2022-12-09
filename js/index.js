import Deck, { VERSION } from './reveal.js'

let Reveal = Deck;


let enqueuedAPICalls = [];

Reveal.initialize = options => {

	Object.assign( Reveal, new Deck( document.querySelector( '.reveal' ), options ) );

	enqueuedAPICalls.map( method => method( Reveal ) );

	return Reveal.initialize();

}
[ 'configure', 'on', 'off', 'addEventListener', 'removeEventListener', 'registerPlugin' ].forEach( method => {
	Reveal[method] = ( ...args ) => {
		enqueuedAPICalls.push( deck => deck[method].call( null, ...args ) );
	}
} );

Reveal.isReady = () => false;

Reveal.VERSION = VERSION;

export default Reveal;