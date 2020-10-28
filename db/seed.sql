create table admin(
    admin_id serial primary key,
    email varchar(100),
    password varchar(100),
    first_name varchar(100),
    last_name varchar(100)
);

create table posts(
    post_id serial primary key,
    post_title varchar(255),
    author_id integer,
    content text
);

create table email_list(
    email_id serial primary key,
    email varchar(100),
    first_name varchar(100),
    last_name varchar(100)
);