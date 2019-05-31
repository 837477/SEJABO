CREATE TABLE IF NOT EXISTS like_dislike(
student_id INT NOT NULL,
post_id INT NOT NULL,
interest TINYINT NOT NULL,
PRIMARY KEY(student_id,post_id),
FOREIGN KEY(student_id) REFERENCES user(student_id) ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY(post_id) REFERENCES post(post_id) ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;