<script lang="ts">
	import DotPattern from '$lib/components/custom/DotPattern.svelte';
	import { Button } from '$lib/components/ui/button';
	import {
		ArrowRight,
		FileText,
		Gift,
		Globe,
		Mail,
		Puzzle,
		RefreshCcw,
		ShieldCheck,
		Sparkles,
		Lock,
		type IconProps,
		Check,
		Bot,
		Info,
		ExternalLink
	} from '@lucide/svelte';
	import Icon from '@iconify/svelte';
	import {
		Accordion,
		AccordionContent,
		AccordionItem,
		AccordionTrigger
	} from '$lib/components/ui/accordion';
	import { onMount, type Component } from 'svelte';
	import ModeToggler from '$lib/components/custom/ModeToggler.svelte';
	import { Slider } from '$lib/components/ui/slider';
	import { toast } from 'svelte-sonner';

	const { form } = $props();

	const toastId = 'wishlist-toast';

	const onsubmit = () => {
		toast.loading('Sending you an email...', { id: toastId });
	};

	$effect(() => {
		if (form?.success) {
			toast.success(form.message, { id: toastId });
		}
		if (form?.error) {
			toast.error(form.message, { id: toastId });
		}
	});

	const features = [
		{
			name: 'One-Click Tailored Resumes',
			description:
				'Generate resumes and cover letters that perfectly match any job posting — instantly and effortlessly.',
			icon: Sparkles
		},
		{
			name: 'Smart Chrome Extension',
			description:
				'Capture job details from sites like LinkedIn or Indeed and create job-ready applications in one click.',
			icon: Puzzle
		},
		{
			name: 'Save Time with Smart Matching',
			description:
				'If you’ve applied to similar jobs before, we’ll suggest reusing your best resume or creating a fresh one.',
			icon: RefreshCcw
		},
		{
			name: 'Secure & Private',
			description:
				'Your personal data is encrypted and stored safely — only you decide what to keep or delete.',
			icon: ShieldCheck
		}
	];

	type FAQItem = {
		id: string;
		icon: Component<IconProps, {}, ''>;
		question: string;
		answer: string;
	};

	const faqItems: FAQItem[] = [
		{
			id: 'item-6',
			icon: Bot,
			question: 'Why use this tool when I can use ChatGPT for free?',
			answer:
				'Great question! While general AI tools can help, our platform is purpose-built for job applications. It automates resume and cover letter generation with the exact tone, keywords, and formatting tailored to each job — all in one click. Plus, with features like saved job profiles, token tracking, a Chrome extension, and transferable credits, it’s faster, more personalized, and optimized for real-world hiring systems like ATS.'
		},
		{
			id: 'item-what-are-tokens',
			icon: Info,
			question: 'What are tokens?',
			answer:
				'Tokens represent the number of words processed by the AI — both what you give it and what it generates. For example, if you input a job description and the AI writes a resume and cover letter, all of those words count as tokens. It helps us measure and manage how much AI processing you use in a fair and simple way.'
		},
		{
			id: 'item-1',
			icon: Sparkles,
			question: 'How does the AI generate my resume?',
			answer:
				'Our AI analyzes the job description and tailors your resume and cover letter with relevant keywords, tone, and structure to help you stand out and pass ATS filters.'
		},
		{
			id: 'item-2',
			icon: Globe,
			question: 'Can I use this for any job or industry?',
			answer:
				"Yes! Our tool works across all industries and roles. Whether you're in tech, healthcare, marketing, or anything else — we've got you covered."
		},
		{
			id: 'item-3',
			icon: FileText,
			question: 'Can I edit the resume or cover letter after it’s generated?',
			answer:
				'Absolutely. You can review, tweak, and customize everything before downloading or submitting your application.'
		},
		{
			id: 'item-4',
			icon: Lock,
			question: 'Is my personal information safe?',
			answer:
				'Yes. We use strong encryption to protect your data and never share your information with third parties. You’re always in control.'
		},
		{
			id: 'item-5',
			icon: Gift,
			question: 'What do I get for joining the wishlist?',
			answer:
				'Early access to the platform, 5000 free generation token, and priority support when we launch. It’s our way of saying thanks!'
		}
	];

	const pricingList = {
		free: [
			'Generate up to 1500 AI tokens',
			'1 Saved Job Profile',
			'Basic Resume & Cover Letter Generator',
			'Chrome Extension Access',
			'Referral Bonus: 500 Tokens Each',
			'Tokens are Non-Transferable'
		],
		pro: [
			'Everything in Free Plan',
			'Buy Tokens with Pay-as-You-Go Slider',
			'Transfer Tokens to Other Users',
			'Unlimited Job Profile Saves',
			'Priority Access to AI Models',
			'Editable AI Output',
			'Faster Resume Generation',
			'Early Access to New Features',
			'No Token Expiry'
		]
	};

	type TokenPricingTier = {
		tokens: string;
		priceUSD: number;
		pricePerThousand: string;
	};

	const tokenPricing: TokenPricingTier[] = [
		{
			tokens: '10K',
			priceUSD: 3,
			pricePerThousand: '$0.30'
		},
		{
			tokens: '20K',
			priceUSD: 5,
			pricePerThousand: '$0.25'
		},
		{
			tokens: '50k',
			priceUSD: 10,
			pricePerThousand: '$0.20'
		},
		{
			tokens: '125k',
			priceUSD: 20,
			pricePerThousand: '$0.16'
		}
	];

	let value = $state(0);

	onMount(() => {
		const sections = document.querySelectorAll('section');
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('show');
				}
			});
		});
		sections.forEach((section) => {
			section.classList.add('hide');
			observer.observe(section);
		});
	});
</script>

<DotPattern
	class="fixed [mask-image:radial-gradient(400px_circle_at_center,white,transparent)] fill-foreground/30"
/>
<main>
	<section
		id="Join"
		class="flex min-h-screen w-full flex-col items-center justify-center gap-12 py-16 text-center"
	>
		<div
			class="group z-10 mx-auto flex w-fit items-center gap-4 rounded-full border bg-muted p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 hover:bg-background dark:border-t-white/5 dark:shadow-zinc-950 dark:hover:border-t-border"
		>
			<span class="text-sm text-foreground">✨ Fine tuned AI models with top resume</span>
			<span class="block h-4 w-0.5 border-l bg-muted-foreground dark:border-background"></span>

			<div
				class="size-6 overflow-hidden rounded-full bg-background duration-500 group-hover:bg-muted"
			>
				<div class="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
					<span class="flex size-6">
						<ArrowRight class="m-auto size-4" />
					</span>
					<span class="flex size-6">
						<ArrowRight class="m-auto size-4" />
					</span>
				</div>
			</div>
		</div>

		<h1 class="text-5xl font-bold">Get Hired Faster with AI-Crafted Resumes</h1>
		<div class="text-muted-foreground">
			Tailor your resume and cover letter for every job in one click. Our AI analyzes job
			descriptions and optimizes your application to match the role — boosting your chances and your
			ATS score.
		</div>
		<div class="flex w-full flex-col items-center gap-2">
			<div
				class="relative z-10 inline-flex items-center overflow-hidden rounded-full p-[1px] ring-0 ring-muted-foreground sm:w-1/2"
			>
				<span
					class="absolute inset-[-1000%] z-0 animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#400078_0%,#e3550e_50%,#400078_100%)]"
				>
				</span>
				<div class="z-50 flex h-full w-full items-center rounded-full bg-background p-2">
					<Mail class="mx-2 size-6 text-muted-foreground" />
					<form method="POST" class="flex flex-1 items-center justify-between">
						<input
							type="email"
							name="email"
							required
							placeholder="example@email.com"
							class="w-full p-2 focus:outline-none"
						/>
						<Button type="submit" class="rounded-full" onclick={onsubmit}>Join Wishlist</Button>
					</form>
				</div>
			</div>
			<div class="text-muted-foreground">
				🎉 First 100 users get early access and 2500 free tokens 🎉
			</div>
			<Button href="resume-review" class="mt-4 rounded-full font-bold"
				>Free Resume Review
				<ExternalLink />
			</Button>
		</div>
	</section>

	<section id="Features" class="py-16">
		<div class="flex flex-col items-center gap-4">
			<h1 class="text-4xl font-bold">Features That'll Set You Apart</h1>
			<span class="text-lg text-muted-foreground"
				>Everything you need to create winning job applications
			</span>
		</div>
		<dl class="mt-20 grid grid-cols-2 gap-10">
			{#each features as item, idx (idx)}
				{@const Icon = item.icon}
				<div class="col-span-full sm:col-span-2 lg:col-span-1">
					<div
						class="mx-auto flex w-fit rounded-lg p-2 shadow-md ring-1 shadow-orange-400/30 ring-black/5 dark:shadow-purple-600/30 dark:ring-white/5"
					>
						<Icon aria-hidden="true" class="size-6 text-muted-foreground" />
					</div>
					<dt class="mt-6 text-center font-semibold text-gray-900 dark:text-gray-50">
						{item.name}
					</dt>
					<dd class="mt-2 text-center leading-7 text-gray-600 dark:text-gray-400">
						{item.description}
					</dd>
				</div>
			{/each}
		</dl>
	</section>
	<section id="Pricing" class="py-16 md:py-32">
		<div class="mx-auto max-w-5xl px-6">
			<div class="mx-auto max-w-2xl space-y-6 text-center">
				<h1 class="text-center text-4xl font-bold">Pricing - Pay what you use</h1>
				<p>
					We have a straightforward and transparent pricing model. You can buy tokens as you need
					them, and they never expire.
				</p>
			</div>

			<div class="mt-8 grid gap-6 md:mt-20 md:grid-cols-5 md:gap-0">
				<div
					class="flex flex-col justify-between space-y-8 rounded-(--radius) border p-6 md:col-span-2 md:my-2 md:rounded-r-none md:border-r-0 lg:p-10"
				>
					<div class="space-y-4">
						<div>
							<h2 class="font-medium">Free</h2>
							<span class="my-3 block text-2xl font-semibold">$0</span>
							<p class="text-sm text-muted-foreground">On signup</p>
						</div>
						<Button href="#Join" variant="outline" class="w-full rounded-full">Get Started</Button>
						<hr class="border-dashed" />

						<ul class="list-outside space-y-1 text-sm font-semibold">
							{#each pricingList.free as item, idx (idx)}
								<li class="flex items-center gap-2">
									<Check class="size-4" />
									{item}
								</li>
							{/each}
						</ul>
					</div>
				</div>

				<div
					class="rounded-(--radius) border bg-muted p-6 shadow-lg shadow-gray-950/5 md:col-span-3 lg:p-10 dark:[--color-muted:var(--color-zinc-900)]"
				>
					<div class="grid gap-6 sm:grid-cols-2">
						<div class="space-y-4">
							<div>
								<h2 class="font-medium">Pro</h2>

								<span class="my-3 block text-2xl font-semibold">
									$ {tokenPricing[value].priceUSD} / {tokenPricing[value].tokens} tokens
								</span>
								<p class="mb-4 text-sm font-bold text-muted-foreground">
									{tokenPricing[value].pricePerThousand} per 1K tokens
								</p>

								<Slider type="single" min={0} max={3} step={1} bind:value />
								<small class="my-4">Use slider to get price</small>
							</div>

							<Button href="#" class="w-full rounded-full">Get Started</Button>
						</div>

						<div>
							<ul class="list-outside space-y-3 text-sm font-semibold">
								{#each pricingList.pro as item, idx (idx)}
									<li class="flex items-center gap-2">
										<Check class="size-3" />
										{item}
									</li>
								{/each}
							</ul>
						</div>
					</div>
				</div>
				<a href="#FAQs">What are tokens?</a>
			</div>
		</div>
	</section>
	<section id="Solution" class="flex flex-col items-center gap-8 py-16">
		<h2 class="text-4xl font-bold">Simple Process, Amazing Results</h2>
		<h2 class="text-center text-lg font-medium">
			Companies that we have analyzed for fine tuning our models
		</h2>
		<div class="mx-auto max-w-5xl px-6">
			<div
				class="mx-auto mt-20 flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-12"
			>
				<Icon icon="simple-icons:nvidia" width="32" height="32" />
				<Icon icon="simple-icons:github" width="32" height="32" />
				<Icon icon="simple-icons:nike" width="32" height="32" />
				<Icon icon="simple-icons:adidas" width="32" height="32" />
				<Icon icon="simple-icons:openai" width="32" height="32" />
				<Icon icon="simple-icons:tailwindcss" width="32" height="32" />
				<Icon icon="simple-icons:accenture" width="32" height="32" />
				<Icon icon="simple-icons:vercel" width="32" height="32" />
				<Icon icon="simple-icons:google" width="32" height="32" />
				<Icon icon="simple-icons:microsoft" width="32" height="32" />
				<Icon icon="simple-icons:netflix" width="32" height="32" />
				<Icon icon="simple-icons:spotify" width="32" height="32" />
				<Icon icon="simple-icons:adobe" width="32" height="32" />
				<Icon icon="simple-icons:tcs" width="32" height="32" />
				<p class="font-bold">More...</p>
			</div>
		</div>
		<div class="my-8">
			<div class="relative z-10 my-8 text-center">
				<h2 class="text-4xl font-bold">Standout among the masses</h2>
				<div class="my-4">
					Be Hirable! With our AI-powered resume and cover letter, generated for you
				</div>
			</div>

			<div
				class="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0"
			>
				<div class="space-y-4">
					<div class="text-5xl font-bold">+1000</div>
					<p>Average Applicants</p>
				</div>
				<div class="space-y-4">
					<div class="text-5xl font-bold">~3-5%</div>
					<p>Goes to interview</p>
				</div>
				<div class="space-y-4">
					<div class="text-5xl font-bold">~5</div>
					<p>May get job</p>
				</div>
			</div>
			<div class="mt-8 animate-bounce text-center text-xl font-bold">
				We'll help you to get into top 3%
			</div>
		</div>
	</section>
	<section id="FAQs" class="py-16">
		<div class="mx-auto flex flex-col items-center gap-10 md:gap-16">
			<div>
				<div class="sticky top-20">
					<h2 class="mt-4 text-center text-4xl font-bold">Frequently Asked Questions</h2>
					<div class="mt-2 text-center text-muted-foreground">
						Discover quick and comprehensive answers to common questions.
					</div>
				</div>
			</div>
			<div class="md:w-2/3">
				<Accordion type="single" class="w-full space-y-2">
					{#each faqItems as item, idx (idx)}
						{@const Icon = item.icon}
						<AccordionItem
							value={item.id}
							class="rounded-lg border bg-background px-4 shadow-xs last:border-b"
						>
							<AccordionTrigger class="cursor-pointer items-center py-5 hover:no-underline">
								<div class="flex items-center gap-3">
									<div class="flex size-6">
										<Icon class="m-auto size-4" />
									</div>
									<span class="text-base">{item.question}</span>
								</div>
							</AccordionTrigger>
							<AccordionContent class="pb-5">
								<div class="px-9">
									<p class="text-base">{item.answer}</p>
								</div>
							</AccordionContent>
						</AccordionItem>
					{/each}
				</Accordion>
			</div>
			<p class="mt-4 text-muted-foreground">
				Can't find what you're looking for?
				<a href="mailto:skillsy@tsuzat.com" class="font-medium text-primary hover:underline">
					Contact us
				</a>
			</p>
		</div>
	</section>
	<footer class="border-t py-12">
		<div class="mx-auto max-w-5xl px-6">
			<div class="flex flex-wrap items-center justify-between gap-6">
				<span class="text-caption order-last block text-center text-sm md:order-first"
					>©copy 2025 Skillsy, All rights reserved</span
				>
				<div class="order-first flex flex-wrap items-center gap-6">
					<a href="#Features" class="text-body hover:text-title block">
						<span>Features</span>
					</a>
					<a href="#Solution" class="text-body hover:text-title block">
						<span>Solution</span>
					</a>
					<a href="#Pricing" class="text-body hover:text-title block">
						<span>Pricing</span>
					</a>
					<a href="#FAQs" class="text-body hover:text-title block">
						<span>Pricing</span>
					</a>
					<Button href="#Join" class="rounded-full">Join Wishlist</Button>
					<ModeToggler />
				</div>
			</div>
		</div>
	</footer>
</main>
