insert into users (username, password, img)
VALUES (${username}, ${password}, 'https://robohash.org/wdas')
RETURNING id, username, img