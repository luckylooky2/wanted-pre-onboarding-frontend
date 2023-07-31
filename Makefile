WANTED = wanted

run:
	@image_count=$$(docker images $(WANTED) | wc -l); \
	if [ "$$image_count" -eq 1 ]; then \
		docker build -t $(WANTED) .; \
	fi
	docker run -d -v ${PWD}:/app -p 3000:3000 --name $(WANTED) $(WANTED)

exec:
	docker exec -it $(WANTED) bash

start:
	docker start $(WANTED)

stop:
	docker stop $(WANTED)

fclean:
	docker rm $(WANTED)
	docker rmi $(WANTED)

re:
	make stop
	make fclean
	make run