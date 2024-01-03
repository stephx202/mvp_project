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
('Reflections on a Sunny Day', 'I radiate positivity and warmth', 'Grateful for the sunshine and nature', 'Enjoyed a peaceful walk in the park', 'Every moment is a new opportunity for happiness'),
('A Productive Morning', 'I start my day with focus and determination', 'Grateful for a healthy breakfast', 'Completed a challenging work task', 'I am making progress towards my goals'),
('Evening Serenity', 'I am at peace with the day', 'Grateful for moments of relaxation', 'Spent quality time with loved ones', 'I appreciate the beauty of simplicity'),
('Creative Exploration', 'I embrace my creative energy', 'Grateful for the inspiration around me', 'Expressed myself through art and writing', 'I am a vessel of unlimited creativity'),
('Fitness Achievements', 'I prioritize my physical well-being', 'Grateful for a strong and healthy body', 'Completed a challenging workout', 'I am committed to a healthy lifestyle'),
('Mindful Moments', 'I practice mindfulness throughout the day', 'Grateful for moments of stillness', 'Focused on my breath and inner peace', 'I am present and grounded in the now');