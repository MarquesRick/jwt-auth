import {Entity, PrimaryColumn, Column} from 'typeorm'

@Entity('TB_NUCLEO_PERMISSAO')
class NucleoPermissao{
    @PrimaryColumn({name: 'ID_PERMISSAO'})
    idPermissao: number;
    @Column({name: 'DESCRICAO_PERMISSAO'})
    descricaoPermissao: string;
    @Column({name: 'ATIVO'})
    ativo: number;
    @Column({name: 'COMENTARIO_PERMISSAO'})
    comentarioPermissao: string;
}

export default NucleoPermissao;
