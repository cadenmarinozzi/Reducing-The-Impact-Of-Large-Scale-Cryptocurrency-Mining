function scrollToComponent(ref) {
	window.scrollTo({ top: ref.current.offsetTop, behavior: 'smooth' });
}

export { scrollToComponent };
