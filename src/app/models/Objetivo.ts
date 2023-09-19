import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
@Entity('tb_objetivo')
class Objetivo {

 @PrimaryGeneratedColumn()
 id: number;

 @Column("varchar", { length: 200 })
 descricao: string;
 @Column("varchar", { length: 100 })
 pontos: string;

}
export default Objetivo;