import {Entity, PrimaryColumn, Column, BeforeInsert, BeforeUpdate} from 'typeorm';
import bcrypt from 'bcryptjs';

@Entity('TB_PORTAL_USUARIO')
class User{
    @PrimaryColumn({name: 'PK_TABELA_ID'})
    pkTabelaId: number;
    @Column({name: 'CPF_USUARIO'})
    cpf: string;
    @Column({name: 'NOME_USUARIO'})
    nome: number;
    @Column({name: 'MATRICULA_USUARIO'})
    matricula: string;
    @Column({name: 'EMAIL_USUARIO'})
    email: string;
    @Column({name: 'EMPRESA_USUARIO'})
    empresa: string;
    @Column({name: 'SENHA_USUARIO'})
    senha: string;
    @Column({name: 'DATA_CRIACAO'})
    dataCriacao: string;
    @Column({name: 'DATA_DESATIVACAO'})
    dataDesativacao: string;
    @Column({name: 'STATUS_USUARIO'})
    status: number;
    @Column({name: 'RESET_CODE'})
    resetCode: string;
    @Column({name: 'EMAIL_RECUPERACAO'})
    emailRecuperacao: string;

    //Para gerar hash na senha automaticamente
    //yarn add bcryptjs
    //yarn add @types/bcryptjs -D
    @BeforeInsert()
    @BeforeUpdate()
    hashPassword(){
        this.senha = bcrypt.hashSync(this.senha, 8);
    }
}

export default User;
