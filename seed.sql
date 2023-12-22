DROP TABLE IF EXISTS journal;

CREATE TABLE journal (
    id SERIAL PRIMARY KEY,
    title VARCHAR(50),
    affirmation VARCHAR(500),
    grateful_for VARCHAR(500),
    good_thing VARCHAR(500),
    positive_thought VARCHAR(500)
);

INSERT INTO journal (title, affirmation, grateful_for, good_thing, positive_thought) VALUES
('My Day Today', 'I am confident and capable', 'I am grateful for my supportive friends', 'I achieved my daily goals', 'I believe in my abilities and positivity'),
('Reflections on a Sunny Day', 'I radiate positivity and warmth', 'Grateful for the sunshine and nature', 'Enjoyed a peaceful walk in the park', 'Every moment is a new opportunity for happiness');