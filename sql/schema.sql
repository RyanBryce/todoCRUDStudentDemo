CREATE DATABASE todo_app;

USE todo_app;

CREATE TABLE todos (
	id integer auto_increment,
	todo varchar(200)  not null,
    completed boolean default false,
    primary key(id)
);

INSERT INTO todos (todo, completed) VALUES ('clean out the gutters', false);

SELECT * FROM todos;