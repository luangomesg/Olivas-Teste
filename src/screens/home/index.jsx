import { useState } from 'react';
import { LoadingDots, FormComponent, Button, CarouselBlog } from '../../components/index';
import { Header, Menu, ButtonSearch, Main, MainText, MainImage, ContainerSEO, SeoText, SeoImage, SEO, ContainerPerformance, PerformanceOne, PerformanceTwo, ContainerBlog, ContainerContato, ContatoText, ContatoForm, Footer, FooterContent, FooterCopyright, FloatingImage, FloatingButton } from './styles';
import visitas from '../../assets/visitas.svg';
import leads from '../../assets/leads.svg';
import grafico from '../../assets/grafico.svg';
import cart from '../../assets/cart.svg';
import timer from '../../assets/timer.svg';
import faturamento from '../../assets/faturamento.svg';
import velocidade from '../../assets/velocidade.svg';
import otimizacao from '../../assets/otimizacao.svg';
import tecnico from '../../assets/tecnico.svg';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import linkedin from '../../assets/linkedin.svg';
import orcamento from '../../assets/orcamento.svg';
import iconmenu from '../../assets/iconmenu.svg';
import Logo from '../../assets/logoa.svg';

export function Home() {
    // Estados para controlar a visibilidade do conteúdo e estado de carregamento
    const [showMore, setShowMore] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Função para alternar o estado do botão flutuante ao clicar na imagem
    const handleImageClick = () => {
        setShowButton(!showButton);
    };

    // Função para mostrar mais conteúdo do blog com um delay de 2 segundos (simulação de carregamento)
    const handleShowMore = async () => {
        setLoading(true);
        setTimeout(() => {
            setShowMore(true);
            setLoading(false);
        }, 2000);
    };

    // Função para rolar a página até o elemento com o id correspondente
    const handleScrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            {/* Marca o início do conteúdo "Sobre o teste" para navegação */}
            <span id='teste' />

            {/* Header com logo e menu de navegação */}
            <Header >
                <div>
                    <img className='imgHeader' src={Logo} alt="" />
                    <Menu isOpen={menuOpen}>
                        {/* Links que rolam até as seções específicas */}
                        <p onClick={() => handleScrollTo('teste')}>Sobre o teste</p>
                        <p onClick={() => handleScrollTo('seo')}>SEO</p>
                        <p onClick={() => handleScrollTo('performance')}>Performance</p>
                        <p onClick={() => handleScrollTo('blog')}>Blog</p>
                        <ButtonSearch />
                        <Button variant='header'>Contato</Button>
                        <div className='click-menu' onClick={toggleMenu}>
                            <img src={iconmenu} alt="Imagem-Menu" />
                        </div>
                    </Menu>
                </div>
            </Header>

            {/* Seção principal com texto e imagem */}
            <Main>
                <MainText >
                    <h1>Teste de desenvolvimento <br /> <span>Front-end Next.JS</span> </h1>
                    <p>Bem-vindo ao nosso desafio de codificação React! Este teste avalia suas habilidades em desenvolver aplicações web interativas com
                        React. Sua tarefa é construir uma aplicação que interaja com APIs externas e exiba dados de forma clara e eficiente. Estamos
                        ansiosos para ver sua criatividade e qualidade de código em prática.</p>
                    <Button variant='main'>Entrar em contato</Button>
                </MainText>
                <MainImage />

            </Main>
            <span className='click2' id='seo' />

            {/* Seção de SEO com texto explicativo e ícones */}
            <ContainerSEO >

                <h1>SEO, ou <span>otimização</span></h1>

                <SEO>
                    <SeoText >
                        <p>É uma estratégia crucial para melhorar a visibilidade e o ranking de um site nos resultados de pesquisa orgânica de motores de
                            busca como Google, Bing e Yahoo. A prática de SEO envolve uma série de técnicas e metodologias que visam otimizar aspectos
                            internos e externos de um website para torná-lo mais atrativo <br /> <br />

                            O que pode ajudar com os seguintes resultados:</p>
                        {/* Ícones representando os benefícios do SEO */}
                        <div>
                            <img src={visitas} alt="Imagem-Visitas" /><p>Visitas do seu site</p>
                            <img src={leads} alt="Imagem-Leads" /><p>Mais leads gerados por mês</p>
                            <img src={grafico} alt="Imagem-Gráfico" /><p>Oportunidades geradas por mês</p>
                            <img src={cart} alt="Imagem-Cart" /><p>Vendas realizadas por mês</p>
                            <img src={timer} alt="Imagem-Timer" /><p>Tempo de carregamento do site</p>
                        </div>
                    </SeoText>
                    <SeoImage />
                </SEO>
                <span className='click' id='performance' />
            </ContainerSEO >

            {/* Seção de performance com exemplos de melhoria no site */}
            <ContainerPerformance >
                <h2>Acelere o seu site e melhore sua Performance!</h2>

                <PerformanceOne >
                    <img src={faturamento} alt="Imagem-Faturamento" />
                    <div>
                        <h2>Para <span>aumentar o faturamento</span> da sua empresa</h2>
                        <p>Você está pronto para transformar a velocidade do seu site e oferecer a melhor experiência possível aos seus usuários?
                            Nossa equipe de especialistas em otimização de sites está aqui para ajudar. Utilizamos as mais avançadas técnicas de SEO
                            técnico e as melhores práticas de desenvolvimento web para garantir que seu site não só carregue rapidamente, mas
                            também se mantenha seguro, acessível e otimizado para todos os dispositivos.</p>
                    </div>
                </PerformanceOne>
                <PerformanceTwo>
                    {/* Ícones representando melhorias na performance do site */}
                    <div><img src={velocidade} alt="Imagem-Velocidade" /> <p>Melhore a Velocidade do Carregamento</p></div>
                    <div className='otm'><img src={otimizacao} alt="Image-Otimização" /> <p>Otimização para Mobile</p></div>
                    <div><img src={tecnico} alt="Imagem-Técnico" /> <p>SEO Técnico</p></div>
                    <span id='blog' />
                </PerformanceTwo>

            </ContainerPerformance>

            {/* Seção do blog com botão "Veja mais" */}
            <ContainerBlog >
                <h2>Últimas do <span>Blog</span></h2>
                <CarouselBlog />
                <br /><br /><br /><br />
                {showMore && <CarouselBlog />}
                {/* Mostra o botão "Veja mais" ou o componente de carregamento */}
                {loading ? (
                    <LoadingDots /> // Mostra o carregamento enquanto os dados são processados
                ) : !showMore ? (
                    <Button variant='mais' onClick={handleShowMore}>Veja mais</Button>
                ) : null}
            </ContainerBlog>

            {/* Seção de contato com formulário */}
            <ContainerContato>
                <ContatoText>
                    <h1>Entre em contato e <span>receba atendimento</span></h1>
                    <p>Por favor, preencha o formulário abaixo com suas informações e a sua mensagem. Nossa equipe entrará em contato com você o mais
                        breve possível.</p>
                </ContatoText>
                <ContatoForm>
                    <FormComponent />
                </ContatoForm>
            </ContainerContato>

            {/* Rodapé com informações da empresa e redes sociais */}
            <Footer>
                <FooterContent>
                    <div className='company'>
                        <img src={Logo} alt="Olivas-Logo" />
                        <p>A Olivas Digital é uma martech (marketing technology company), que há mais de 10 anos ajuda empresas de todos os portes e segmentos
                            a impulsionarem suas vendas no digital.</p>
                    </div>
                    <div className='talk'>
                        <h6>Fale Conosco</h6>
                        <div>
                            <h4>Atendimento</h4>
                            <h5>Redes Sociais</h5>
                            <span>+55 (11) 2391-6090</span>

                            {/* Links para redes sociais */}
                            <div className='social'>
                                <a href="https://www.facebook.com/OlivasDigitalBR/" target="_blank" rel="noopener noreferrer">
                                    <img src={facebook} alt="Imagem-Facebook" />
                                </a>
                                <a href="https://www.instagram.com/olivasdigital/" target="_blank" rel="noopener noreferrer">
                                    <img src={instagram} alt="Imagem-Instagram" />
                                </a>
                                <a href="https://www.linkedin.com/company/2977265" target="_blank" rel="noopener noreferrer">
                                    <img src={linkedin} alt="Imagem-Linkedin" />
                                </a>
                            </div>
                        </div>
                    </div>
                </FooterContent>
                <FooterCopyright>
                    <p><span> © </span>2014-2024 - Olivas Digital</p>
                </FooterCopyright>
            </Footer>

            {/* Imagem flutuante que ao clicar, exibe o botão flutuante */}
            <FloatingImage onClick={handleImageClick}>
                <img src={orcamento} alt="Imagem-Orçamento" />
            </FloatingImage>
            <FloatingButton show={showButton} onClick={() => alert('Botão clicado!')}>
                <p>Orçamento</p>
            </FloatingButton>
        </>
    );
}
