// Exemplo de estrutura para os dados dos projetos
import BannerPousadaLeAnge from '@/assets/banners-project/banner-pousada-le-ange.jpg';
import BannerEcoFrame from '@/assets/banners-project/banner-ecoframe.jpg';
import BannerNovaMetalica from '@/assets/banners-project/banner-novametalica.png';
import BannerFast from "@/assets/banners-project/banner-fast.png";
import BannerYago from "@/assets/banners-project/banner-yago.png";

export const projects = [
    {
        image: BannerPousadaLeAnge,
        alt: "banner-do-site-da-pousada-le-ange-feito-por-aleph-desenvolvedor-web",
        nome: "Pousada Le Ange",
        data: "10/12/2024",
        tecnologias: ["react", "javascript", "html", "css", "sass", "vite", "firebase"],
    },
     {
        image: BannerEcoFrame,
        alt: "banner-do-site-do-eco-frame-feito-por-aleph-desenvolvedor-web",
        nome: "EcoFrame",
        data: "01/02/2025",
        tecnologias: ["javascript", "html", "css"],
    },
     {
        image: BannerYago,
        alt: "",
        nome: "EuYagoLopes",
        data: "19/05/2025",
        tecnologias: ["html", "javascript", "css"],
    },
     {
        image: BannerNovaMetalica,
        alt: "",
        nome: "Nova Metálica",
        data: "02/02/2025",
        tecnologias: ["react", "javascript", "html", "css", "vite", "firebase"],
    },
     {
        image: BannerFast,
        alt: "",
        nome: "Fast Sistemas Construtivos",
        data: "19/02/2025",
        tecnologias: ["html", "css", "javascript"],
    },
];