import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CarouselItem, StyledSlider } from './styles'
import { Button } from '../index'



export function CarouselBlog() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await fetch(
                    'https://www.olivas.digital/wp-json/wp/v2/posts?categories=373'
                );
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error("Erro ao buscar posts:", error);
            }

        }

        fetchPosts();
    }, []);

    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1260,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 915,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="slider-container">
            <StyledSlider {...settings}>
                {posts && posts.map((post) => {
                    return (
                        <CarouselItem key={post.id}>
                            <img src={post.yoast_head_json.og_image[0].url} alt="Image-Post" />
                            <h5>{post.yoast_head_json.title}</h5>
                            <p>{post.yoast_head_json.description}</p>
                            <Button variant="blog" ><a href={post.yoast_head_json.og_url} target="_blank">Leia Mais</a></Button>

                        </CarouselItem>
                    )
                })}


            </StyledSlider>
        </div>
    );
}




