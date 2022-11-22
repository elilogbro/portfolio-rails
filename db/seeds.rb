Video.destroy_all
Project.destroy_all
Technology.destroy_all

p1 = Project.create(name: 'Playlist Creator', github_url: 'https://github.com/elilogbro/Playlist-App', image: '/Playlist.png')
p2 = Project.create(name: 'Guitar World', github_url: 'https://github.com/elilogbro/Guitar-World', image: '/GuitarWorld.png')
p3 = Project.create(name: 'Tento', github_url: 'https://github.com/elilogbro/camping-finder', image: '/Tento.png')
p4 = Project.create(name: 'Workout Tracker', github_url: 'https://github.com/elilogbro/Workout-Tracker', image: '/WorkoutTracker.png')

Video.create(embed_code: '<div style="position: relative; padding-bottom: NaN%; height: 0;"><iframe src="https://www.loom.com/embed/1c4c3880f1134ebaa9797cf213ebe34f" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>', project_id: p4.id)
Video.create(embed_code: '<div style="position: relative; padding-bottom: NaN%; height: 0;"><iframe src="https://www.loom.com/embed/7723ab2518284bd887525c91f0a5ed2a" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>', project_id: p3.id)
Video.create(embed_code: '<div style="position: relative; padding-bottom: NaN%; height: 0;"><iframe src="https://www.loom.com/embed/771527abe6f04fe793fdabd89bf99b1e" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>', project_id: p2.id)
Video.create(embed_code: '<div style="position: relative; padding-bottom: NaN%; height: 0;"><iframe src="https://www.loom.com/embed/e1be8bb3804d467eb9a16446462cc478" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>', project_id: p1.id)

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
