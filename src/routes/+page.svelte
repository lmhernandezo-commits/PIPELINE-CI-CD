<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { CharacterBrowser } from '$lib/features/character-browser';
	import type { PageData } from './$types';

	export let data: PageData;

	function updateQuery(value: string) {
		const trimmed = value.trim();
		const params = new URLSearchParams();

		if (trimmed) {
			params.set('q', trimmed);
		}

		const home = `${base}/`;
		const target = params.toString() ? `${home}?${params.toString()}` : home;
		goto(target, { replaceState: true, noScroll: true });
	}
</script>

<CharacterBrowser data={data} onQueryChange={updateQuery} />
