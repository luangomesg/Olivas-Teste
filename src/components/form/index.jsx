import { useState, useEffect } from 'react';
import { Button, CheckboxContainer, CustomCheckbox, Form, HiddenCheckbox, Input, InputContainer, Label, Row, Select, StyledPhoneInput, TextArea } from './styles';

export function FormComponent() {
    // Define o estado inicial do formulário com valores padrão
    const [formData, setFormData] = useState({
        fullName: '',        // Nome completo
        corporateEmail: '',  // E-mail corporativo
        phone: '',           // Telefone
        role: '',            // Função na empresa
        message: '',         // Mensagem
        agreeTerms: false,   // Concordância com os termos
    });

    // Define o estado para controlar os erros no formulário
    const [errors, setErrors] = useState({
        phone: false, // Erro relacionado ao campo de telefone
    });

    // useEffect: Solicita permissão para enviar notificações ao carregar o componente
    useEffect(() => {
        if (Notification.permission !== 'granted') {
            Notification.requestPermission();
        }
    }, []);

    // Função para lidar com mudanças no campo de telefone
    const handlePhoneChange = (phone) => {
        setFormData({ ...formData, phone }); // Atualiza o estado do telefone
        setErrors({ ...errors, phone: phone === '' }); // Seta erro caso o telefone esteja vazio
    };

    // Função para lidar com mudanças em outros campos do formulário
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target; // Desestruturação do evento
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value, // Atualiza o estado dependendo se é checkbox ou outro tipo de input
        });
    };

    // Função para exibir notificações no navegador
    const showNotification = (message) => {
        if (Notification.permission === 'granted') {
            // Mostra notificação se a permissão for concedida
            new Notification('Formulário', {
                body: message,
                icon: 'https://www.example.com/icon.png',
            });
        } else {
            alert(message); // Alerta caso notificações não estejam habilitadas
        }
    };

    // Função de validação do formulário
    const validateForm = () => {
        const newErrors = {
            phone: formData.phone === '', // Verifica se o campo de telefone está vazio
        };
        setErrors(newErrors); // Atualiza o estado de erros
        if (newErrors.phone) {
            showNotification('O campo telefone é obrigatório.'); // Notifica se o telefone estiver em branco
        }
        return !Object.values(newErrors).includes(true); // Retorna true se não houver erros
    };

    // Função para lidar com o envio do formulário
    const handleSubmit = (e) => {
        e.preventDefault(); // Previne o comportamento padrão de envio do formulário
        if (validateForm()) {
            console.log(formData); // Exibe os dados do formulário no console se estiver válido
        }
    };

    return (
        <Form onSubmit={handleSubmit}> {/* Início do formulário */}
            <Row>
                <InputContainer>
                    <Label>Nome Completo <span>*</span></Label>
                    <Input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required /* Campo obrigatório */
                    />
                </InputContainer>
                <InputContainer>
                    <Label>E-mail Corporativo <span>*</span></Label>
                    <Input
                        type="email"
                        name="corporateEmail"
                        value={formData.corporateEmail}
                        onChange={handleChange}
                        required /* Campo obrigatório */
                    />
                </InputContainer>
            </Row>

            <Row>
                <InputContainer>
                    <Label>Telefone <span>*</span></Label>
                    <StyledPhoneInput
                        country={'br'} /* Define o país para o campo de telefone */
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        enableSearch /* Habilita busca de código de país */
                        required /* Campo obrigatório */
                    />
                </InputContainer>
                <InputContainer>
                    <Label>Qual a sua função na empresa? <span>*</span></Label>
                    <Select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        required /* Campo obrigatório */
                    >
                        <option value="">Selecione uma opção</option>
                        <option value="Gerente">Gerente</option>
                        <option value="Coordenador">Coordenador</option>
                        <option value="Analista">Analista</option>
                        <option value="Desenvolvedor">Desenvolvedor</option>
                    </Select>
                </InputContainer>
            </Row>

            <InputContainer>
                <Label>Mensagem <span>*</span></Label>
                <TextArea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required /* Campo obrigatório */
                />
            </InputContainer>

            <CheckboxContainer>
                {/* Campo de checkbox para concordância com termos */}
                <HiddenCheckbox
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    required /* Campo obrigatório */
                />
                <CustomCheckbox checked={formData.agreeTerms} />
                <Label className='labelCheckBox'>
                    Ao informar meus dados, eu concordo com a <a href="https://www.olivas.digital/politica-de-privacidade/" target='_blank'>Política de Privacidade</a> e concordo em receber comunicações.
                </Label>
            </CheckboxContainer>

            <Button type="submit">Receber atendimento</Button> {/* Botão de envio do formulário */}
        </Form>
    );
}
