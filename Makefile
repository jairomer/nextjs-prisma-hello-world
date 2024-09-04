db:
	docker run -it -p 5432:5432 -e POSTGRES_PASSWORD=mysecretpassword postgres

dev:
	pnpm dev
