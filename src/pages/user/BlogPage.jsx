import { motion } from 'framer-motion'
import { FaCalendar, FaBook, FaClock } from 'react-icons/fa'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import english from '../../assets/images/english.svg'
import german from '../../assets/images/german.svg'
import russian from '../../assets/images/russian.png'
import teacher1 from '../../assets/images/teacher1.webp';
import teacher2 from '../../assets/images/teacher2.webp';
import teacher4 from '../../assets/images/teacher4.webp';
import { useEffect, useState } from 'react'
import CommentSection from '../../components/user/Blog/Comment';
import { useParams } from 'react-router-dom'

// Mock data for blogs
const blogs = [
    {
        id: 1,
        title: "İngilis Dili Öyrənməyə Giriş",
        content: `
        İngilis dili öyrənərək qlobal kommunikasiya bacarıqlarınızı gücləndirin və beynəlxalq iş imkanlarına açıq olun. 
        Bu kursla dili asan və effektiv şəkildə mənimsəyin.

        ### Kursun Məzmunu:

        - **İngilis Dilinin Qrammatikası**: 
            İngilis dilinin əsas qrammatik qaydalarını öyrənəcəksiniz. İsimlər, feillər, sifətlər və onların cümlədə istifadəsi üzrə biliklərinizi inkişaf etdirin.
            
        - **Danışıq Bacarıqları**:
            Bu dərslərdən sonra gündəlik həyatda və iş görüşmələrində ingilis dilində sərbəst danışa biləcəksiniz. Söhbət zamanı doğru ifadələr və sözlərdən istifadə etməyi öyrənəcəksiniz.
        
        - **Dinləmə Bacarıqları**:
            İngilis dilində danışılanları daha rahat başa düşə biləcəksiniz. Biz sizə ən çox istifadə olunan dialekt və ifadələr üzrə məsləhətlər verəcəyik.

        ### Kimlər Üçün Uyğundur?

        - İngilis dilində yeni başlayanlar.
        - İş görüşmələrində və gündəlik həyatda dili istifadə etmək istəyənlər.
        - Qramatikayı öyrənməkdə çətinlik çəkənlər.

        ### Tövsiyələr:

        - Hər gün 20-30 dəqiqə ingilis dilində dinləmə çalışmaları edin.
        - Yeni öyrəndiyiniz sözləri və ifadələri təkrar etməyi unutmayın.
        - Qrammatika dərslərini diqqətlə öyrənərək dilin strukturunu mənimsəyin.

        İngilis dilini öyrənmək sizə beynəlxalq iş imkanları yaradacaq, yeni insanlarla tanış olmağa və dünyanı kəşf etməyə kömək edəcək. Bu kursda əldə etdiyiniz biliklər sizin gələcəyiniz üçün əhəmiyyətli addım olacaq.
        `,
        author: {
            name: "Səbinə Hümbətova",
            avatar: teacher4,
            bio: "İngilis dili müəllimi, 10+ il təcrübə. Dil tədrisi və mədəniyyətarası kommunikasiya üzrə mütəxəssis."
        },
        publishDate: "2023-05-15",
        course: "Başlanğıc üçün İngilis Dili",
        readTime: "8 dəqiqəlik oxu",
        tags: ["İngilis Dili", "Dil Öyrənmə", "Təhsil"],
        image: english
    },
    {
        id: 2,
        title: "Alman Dili Qrammatikasının Əsasları",
        content: `
        Alman dilinin qrammatikasını öyrənərək dilin strukturunu düzgün mənimsəyin və nitq qabiliyyətlərinizi inkişaf etdirin.
        Bu kurs Alman dilində sərbəst ünsiyyət üçün vacib olan qrammatik qaydaları əhatə edir.

        ### Kursun Məzmunu:

        - **Qrammatik Qaydalar**:
            Alman dilinin əsas qrammatik qaydalarını öyrənəcəksiniz. Cümlə quruluşu, feillərin çəkməsi, artikl və sifətlərin istifadəsi haqqında geniş məlumatlar əldə edəcəksiniz.
        
        - **İsimlərin İstifadəsi**:
            Alman dilində isimlərin kişi, qadın və orta cinslərə bölünməsi əhəmiyyətli rol oynayır. Bu dərslərdə isimlərin düzgün istifadəsini mənimsəyəcəksiniz.
        
        - **Çətin Qrammatik Mövzular**:
            Sərbəst danışıq zamanı tez-tez səhv olunan qrammatik mövzuları öyrənəcəksiniz, məsələn, dativ və akuzativ halın istifadəsi və cümlə strukturunda dəyişikliklər.

        ### Kimlər Üçün Uyğundur?

        - Alman dilində yeni başlayanlar.
        - Dilin qrammatikasını düzgün öyrənərək danışıq qabiliyyətini artırmaq istəyənlər.
        - Alman dili ilə iş əlaqəsi olanlar.

        ### Tövsiyələr:

        - Hər gün qrammatika qaydalarına dair məşqlər edin.
        - Kitab oxuyarkən və ya musiqi dinləyərkən qrammatik qaydaların istifadəsinə diqqət yetirin.
        - Düzgün cümlə quruluşuna nail olmaq üçün sadə qrammatik tapşırıqlarla başlayın və mürəkkəb mövzulara keçid edin.

        Alman dilini düzgün öyrənməklə Avropada daha yaxşı ünsiyyət qurmaq və iş imkanları tapmaq mümkündür. Qrammatika bu yolda ilk addımdır və bu kurs sizə güclü başlanğıc verəcəkdir.
        `,
        author: {
            name: "Səbinə Məhərrəmova",
            avatar: teacher1,
            bio: "Alman dili üzrə ekspert, 7+ il təcrübə. Alman dilinin tədrisi və qrammatikası üzrə mütəxəssis."
        },
        publishDate: "2023-05-10",
        course: "Alman Dili Qrammatikası",
        readTime: "9 dəqiqəlik oxu",
        tags: ["Alman Dili", "Qrammatika", "Təhsil"],
        image: german
    },
    {
        id: 3,
        title: "Rus Dili Öyrənməyə Giriş",
        content: `
        Rus dili öyrənmək, yeni mədəniyyətləri kəşf etmək və beynəlxalq əlaqələrinizi genişləndirmək üçün əla bir yoldur. Bu kursla rus dilini asanlıqla öyrənə bilərsiniz.

        ### Kursun Məzmunu:

        - **Rus Dilinin Qrammatikası**: 
            Rus dilinin qrammatik qaydalarını öyrənəcəksiniz. İsimlərin, feillərin və sifətlərin cümlədə necə işlədiyini öyrənmək dil bacarıqlarınızı artıracaq.
        
        - **Danışıq Bacarıqları**:
            Gündəlik həyatda rus dilində sərbəst ünsiyyət qurmaq üçün danışıq bacarıqlarınızı inkişaf etdirəcəksiniz. 
            
        - **Dinləmə Bacarıqları**:
            Rus dilində danışılanları daha yaxşı başa düşmək üçün dinləmə məşqləri ilə dilinizi inkişaf etdirəcəksiniz.

        ### Kimlər Üçün Uyğundur?

        - Rus dilində yeni başlayanlar.
        - Gündəlik həyatda və iş mühitində rus dilini istifadə etmək istəyənlər.
        - Mədəniyyətləri kəşf etmək və yeni dostlar qazanmaq istəyənlər.

        ### Tövsiyələr:

        - Hər gün 20-30 dəqiqə rus dilində dinləmə çalışmalarına vaxt ayırın.
        - Yeni öyrəndiyiniz sözləri və ifadələri praktika edin.
        - Rus mədəniyyəti və ədəbiyyatı ilə tanış olun.

        Rus dili öyrənmək sizə yeni imkanlar açacaq, dünya ilə əlaqələrinizi genişləndirəcək və yeni dostlar qazanmağınıza kömək edəcək. Bu kursla özünüzü rus dilində ifadə etməyə hazır olun!
        `,
        author: {
            name: "Elvira Ocaxquliyeva",
            avatar: teacher2,
            bio: "Rus dili müəllimi, 5+ il təcrübə. Dil öyrənmə metodları üzrə mütəxəssis."
        },
        publishDate: "2023-05-20",
        course: "Başlanğıc üçün Rus Dili",
        readTime: "7 dəqiqəlik oxu",
        tags: ["Rus Dili", "Dil Öyrənmə", "Təhsil"],
        image: russian // Assuming you have a Russian image asset
    }
];


export default function BlogPage() {
    const { blogId } = useParams();
    const [blog, setBlog] = useState(null);
    console.log(blogId)
    console.log(blog)

    useEffect(() => {
        const selectedBlog = blogs.find(i => i.id === parseInt(blogId));
        setBlog(selectedBlog);
        window.scrollTo(0, 0);
    }, [blogId]);

    if (!blog) {
        return <div className="text-center text-2xl mt-20 dark:text-white">Yüklənir...</div>;
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="container flex flex-col sm:mt-16 mt-10 mx-auto py-12"
        >
            <Card className="sm:max-w-4xl w-full mx-auto dark:text-white text-black overflow-hidden">
                <div className="relative h-[400px]  w-full">
                    <img className='w-full h-full object-cover'
                        src={blog.image}
                        alt={blog.title}
                    />
                </div>
                <CardHeader>
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <CardTitle className="text-3xl dark:text-white text-black font-bold mb-4">{blog.title}</CardTitle>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                            <div className="flex items-center">
                                <FaCalendar className="mr-2" />
                                {blog.publishDate}
                            </div>
                            <div className="flex items-center">
                                <FaBook className="mr-2" />
                                {blog.course}
                            </div>
                            <div className="flex items-center">
                                <FaClock className="mr-2" />
                                {blog.readTime}
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {blog.tags.map((tag) => (
                                <Badge key={tag} variant="secondary">{tag}</Badge>
                            ))}
                        </div>
                    </motion.div>
                </CardHeader>
                <CardContent>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        <p className="text-lg dark:text-white text-black leading-relaxed ">{blog.content}</p>
                    </motion.div>
                </CardContent>
                <CardFooter className="flex flex-col sm:flex-row justify-between items-center border-t pt-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="flex items-center space-x-4 mb-4 sm:mb-0"
                    >
                        <Avatar className="h-16 w-16 dark:text-white text-black">
                            <AvatarImage src={blog.author.avatar} alt={blog.author.name} />
                            <AvatarFallback>{blog.author.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                            <h3 className="font-semibold dark:text-white text-black">{blog.author.name}</h3>
                            <p className="text-sm text-muted-foreground dark:text-white text-black">{blog.author.bio}</p>
                        </div>
                    </motion.div>
                </CardFooter>
            <div className='px-5'>
            <CommentSection/>
            </div>
            </Card>
         
        </motion.div>
    )
}
