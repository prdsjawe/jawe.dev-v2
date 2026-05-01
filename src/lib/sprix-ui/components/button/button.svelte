<script lang="ts">
	import './button.css';
	import Spinner from '../spinner/spinner.svelte';
	import classnames from '../../utils/classnames';
	import { BRC, BSC, BVC } from './button.record';

	let {
		id = '',
		type = 'button',
		size = 'md',
		role = 'primary',
		variant = 'default',
		disabled = false,
		loading = false,
		class: className = '',
		name,
		value,
		ariaLabel,
		ariaCurrent,
		ariaControls,
		ariaExpanded,
		ariaHaspopup,
		children,
		leftSlot,
		rightSlot,
		onclick,
		onfocus,
		onblur,
		onkeydown
	}: Partial<Button.Props> = $props();

	let hasLabel = $derived(Boolean(children));
	let hasLeftAdornment = $derived(Boolean(leftSlot));
	let hasRightAdornment = $derived(Boolean(rightSlot));
	let isDisabled = $derived(Boolean(disabled || loading || variant === 'disabled'));
	let buttonClass = $derived(
		classnames(
			'btn',
			BSC[size ?? 'md'],
			BRC[role ?? 'primary'],
			BVC[variant ?? 'default'],
			loading && 'btn-loading',
			className
		)
	);
	let contentClass = $derived(classnames(loading && 'btn-content-hidden'));
</script>

<button
	{id}
	{name}
	{value}
	{type}
	class={buttonClass}
	aria-busy={loading}
	aria-label={ariaLabel}
	aria-current={ariaCurrent}
	aria-controls={ariaControls}
	aria-expanded={ariaExpanded}
	aria-haspopup={ariaHaspopup}
	disabled={isDisabled}
	{onclick}
	{onfocus}
	{onblur}
	{onkeydown}
>
	{#if loading}
		<span class="btn-loader" aria-hidden="true">
			<Spinner {size} class="btn-spinner" />
		</span>
	{/if}

	{#if hasLeftAdornment}
		<span class={classnames('left-icon', contentClass)} aria-hidden="true">
			{@render leftSlot?.()}
		</span>
	{/if}

	{#if hasLabel && children}
		<span class={classnames('label', contentClass)}>
			{@render children()}
		</span>
	{/if}

	{#if hasRightAdornment}
		<span class={classnames('right-icon', contentClass)} aria-hidden="true">
			{@render rightSlot?.()}
		</span>
	{/if}
</button>
