import { useState, useEffect } from 'react';
import { Button, CheckboxContainer, CustomCheckbox, Form, HiddenCheckbox, Input, InputContainer, Label, Row, Select, StyledPhoneInput, TextArea } from './styles';

export function FormComponent() {
    const [formData, setFormData] = useState({
        fullName: '',
        corporateEmail: '',
        phone: '',
        role: '',
        message: '',
        agreeTerms: false,
    });

    const [errors, setErrors] = useState({
        phone: false,
    });

    useEffect(() => {

        if (Notification.permission !== 'granted') {
            Notification.requestPermission();
        }
    }, []);

    const handlePhoneChange = (phone) => {
        setFormData({ ...formData, phone });
        setErrors({ ...errors, phone: phone === '' });
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const showNotification = (message) => {
        if (Notification.permission === 'granted') {
            new Notification('Formulário', {
                body: message,
                icon: 'https://www.example.com/icon.png',
            });
        } else {
            alert(message);
        }
    };

    const validateForm = () => {
        const newErrors = {
            phone: formData.phone === '',
        };
        setErrors(newErrors);
        if (newErrors.phone) {
            showNotification('O campo telefone é obrigatório.');
        }
        return !Object.values(newErrors).includes(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log(formData);
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Row>
                <InputContainer>
                    <Label>Nome Completo <span>*</span></Label>
                    <Input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                </InputContainer>
                <InputContainer>
                    <Label>E-mail Corporativo <span>*</span></Label>
                    <Input
                        type="email"
                        name="corporateEmail"
                        value={formData.corporateEmail}
                        onChange={handleChange}
                        required
                    />
                </InputContainer>
            </Row>

            <Row>
                <InputContainer>
                    <Label>Telefone <span>*</span></Label>
                    <StyledPhoneInput
                        country={'br'}
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        enableSearch
                        required
                    />
                </InputContainer>
                <InputContainer>
                    <Label>Qual a sua função na empresa? <span>*</span></Label>
                    <Select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        required
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
                    required
                />
            </InputContainer>

            <CheckboxContainer>
                <HiddenCheckbox
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    required
                />
                <CustomCheckbox checked={formData.agreeTerms} />
                <Label className='labelCheckBox'>
                    Ao informar meus dados, eu concordo com a <a href="https://www.olivas.digital/politica-de-privacidade/" target='_blank'>Política de Privacidade</a> e concordo em receber comunicações.
                </Label>
            </CheckboxContainer>

            <Button type="submit">Receber atendimento</Button>
        </Form>
    );
}
