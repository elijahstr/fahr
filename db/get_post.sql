select a.first_name, a.last_name, p.post_title, p.content, p.post_id, p.post_date from admin a
join posts p on a.admin_id = p.author_id
where p.post_id = $1;