import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	return (
		<div className="flex h-dvh flex-col">
			<header className="h-12"></header>

			<main className="flex min-h-0 flex-1">
				<div className="flex-1 bg-black"></div>
				<div className="flex-1 bg-black"></div>
			</main>

			<footer className="h-12"></footer>
		</div>
	);
}
