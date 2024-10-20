import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { motion } from 'framer-motion';

const MovingCardsRight = () => {
  return (
    (<div
      className="rounded-md flex flex-col antialiased  dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <motion.h2
          className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Məzunlarımızın Rəyləri
        </motion.h2>
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
    </div>)
  );
}


const testimonials = [
    {
      quote: 
        "Kursun hər bir dərsi mənim üçün unudulmaz bir təcrübə oldu. Hər gün yeni biliklər əldə etmək, müxtəlif mövzularla tanış olmaq və bu yolda gözəl dostlar qazanmaq imkanı tapdım. Burada keçirdiyim zaman, mənim inkişafımda əvəzsiz rol oynadı.",
      name: "Aylin Məmmədova",
      title: "Məzun",    },
    {
      quote: 
        "Bu kurs mənim üçün bir dönüş nöqtəsi oldu. Hər dərs, özümə inamımı artırdı və yeni perspektivlər açdı. Mükəmməl müəllimlərimiz və müsbət atmosfer sayəsində öyrənmək çox asan oldu. Artıq gələcəyə daha nikbin baxıram.",
      name: "Ramin Quliyev",
      title: "Məzun",
    },
    {
      quote: 
        "Dərslər elə maraqlı və təsirli idi ki, hər anı dəyərləndirdim. Müxtəlif mövzulara dair müzakirələrdə iştirak etmək, yeni ideyalarla tanış olmaq və həmyaşıdlarımla dərin dostluqlar qurmaq mənim üçün əvəzsiz bir təcrübə oldu. Bu kurs, mənim həyatıma müsbət bir təsir bağışladı.",
      name: "Ləman Əliyeva",
      title: "Məzun",
    },
    {
      quote: 
        "Burada keçirdiyim zaman, yalnız biliklər qazanmaqla kifayətlənmədi. Eyni zamanda, özümü tanıdım və hədəflərimi müəyyən etdim. Müəllimlərin dəstəyilə, bu kursdan sonra daha da irəliləmək üçün böyük motivasiya tapdım.",
      name: "Elşən Həsənov",
      title: "Məzun",
    },
    {
      quote: 
        "Bu kursda öyrənmək, yalnız bilik qazanmaq deyil, eyni zamanda özümə inamımı artırmaqdır. Hər dərs yeni bacarıqlar, yeni anlayışlar və yeni dostlar qazandırdı. Bu mühitdə olmaq, mənim üçün bir ilham qaynağı oldu.",
      name: "Nigar Rzayeva",
      title: "Məzun",
    },
  ];
  
  

export default MovingCardsRight