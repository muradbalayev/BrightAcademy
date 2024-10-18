import { Avatar, Typography, Button } from '@mui/material';

const instructors = [
  {
    name: 'John Doe',
    title: 'English Instructor',
    description: 'Expert in IELTS and TOEFL preparation.',
    image: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg',
  },
  {
    name: 'Jane Smith',
    title: 'Math Instructor',
    description: 'Specializes in high school and university-level mathematics.',
    image: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg',
  },
  {
    name: 'Alice Johnson',
    title: 'Programming Instructor',
    description: 'Experienced in web and mobile application development.',
    image: 'https://images.pexels.com/photos/1181655/pexels-photo-1181655.jpeg',
  },
  {
    name: 'Michael Brown',
    title: 'Business Management Instructor',
    description: 'Teaches marketing and finance fundamentals.',
    image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg',
  },
];

export default function Instructors() {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900">
      <h2 className="inter text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-16">
        Müəllimlərimiz
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 container mx-auto px-4">
        {instructors.map((instructor, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 py-10 flex flex-col items-center"
          >
            <Avatar alt={instructor.name} src={instructor.image} sx={{ width: 200, height: 200, mb: 2 }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold' }} className="text-gray-800 dark:text-white">
              {instructor.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" className="dark:text-gray-300">
              {instructor.title}
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, textAlign: 'center' }} className="text-gray-600 dark:text-gray-300">
              {instructor.description}
            </Typography>
            <Button variant="contained" sx={{ mt: 3, bgcolor: 'primary.main', color: 'white', borderRadius: '20px' }}>
              Daha çox
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
