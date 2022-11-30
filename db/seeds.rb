Video.destroy_all
Project.destroy_all
Technology.destroy_all

p1 = Project.create(name: 'Playlist Creator', github_url: 'https://github.com/elilogbro/Playlist-App', image: '/Playlist.png', details: 'This playlist application was created to easily manage your favorite songs!')
p2 = Project.create(name: 'Guitar World', github_url: 'https://github.com/elilogbro/Guitar-World', image: '/GuitarWorld.png', details: 'Guitar World is a feau e-commerce platform where users can sell and purchase guitars.')
p3 = Project.create(name: 'Tento', github_url: 'https://github.com/elilogbro/camping-finder', image: '/Tento.png', details: 'I used my passion for the outdoors to create Tento, an application allowing users to find different kinds of campsites.')
p4 = Project.create(name: 'Workout Tracker', github_url: 'https://github.com/elilogbro/Workout-Tracker', image: '/WorkoutTracker.png', details: 'Inspired by my current gym routine, this workout tracker app can be used to manage user routines.')

wt = Video.create(embed_code: 'https://www.loom.com/embed/1c4c3880f1134ebaa9797cf213ebe34f', project_id: p4.id)
tento = Video.create(embed_code: 'https://www.loom.com/embed/af073518dbb4473c8fc672874e5ba27c', project_id: p3.id)
gw = Video.create(embed_code: 'https://www.loom.com/embed/771527abe6f04fe793fdabd89bf99b1e', project_id: p2.id)
pc = Video.create(embed_code: 'https://www.loom.com/embed/e1be8bb3804d467eb9a16446462cc478', project_id: p1.id)

Technology.create(name: 'React.js', project_id: p1.id)
Technology.create(name: 'Custom db.json', project_id: p1.id)
Technology.create(name: 'React.js', project_id: p2.id)
Technology.create(name: 'Ruby', project_id: p2.id)
Technology.create(name: 'Sinatra', project_id: p2.id)
Technology.create(name: 'React.js', project_id: p3.id)
Technology.create(name: 'Ruby on Rails', project_id: p3.id)
Technology.create(name: 'User Authentication', project_id: p3.id)
Technology.create(name: 'Styled Components', project_id: p3.id)
Technology.create(name: 'React.js', project_id: p4.id)
Technology.create(name: 'Ruby on Rails', project_id: p4.id)
Technology.create(name: 'User Authentication', project_id: p4.id)
Technology.create(name: 'Styled Components', project_id: p4.id)
