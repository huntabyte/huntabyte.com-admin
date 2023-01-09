<script lang="ts">
	import type { Lesson } from '@prisma/client';

	export let lesson: Lesson;
</script>

<div class="flex flex-col">
	{#if lesson.videoUrl}
		<div class="w-full">
			<div style="padding:56.25% 0 0 0;position:relative;">
				<iframe
					src={lesson.videoUrl}
					style="position:absolute;top:0;left:0;width:100%;height:100%;"
					frameborder="0"
					allow="autoplay; fullscreen; picture-in-picture"
					allowfullscreen
					title="lesson video"
				/>
			</div>
		</div>
		<h1>This is where my video goes!</h1>
	{/if}
	{#if lesson.content}
		<div>
			{@html lesson.content}
		</div>
	{/if}
</div>
