import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({
  tableName: 'user_goals'
})
export class Goal extends Model<Goal> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name;

  @Column({
    type: DataType.TEXT('long'),
  })
  description;

  @Column({
    type: DataType.STRING,
    defaultValue: 'unapproved',
    allowNull: false
  })
  status;

  @Column({
    type: DataType.STRING(36),
    references: {
      model: 'user_entity',
      key: 'id'
    },
    onUpdate: 'cascade',
    onDelete: 'cascade'
  })
  user_id;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
    allowNull: false
  })
  is_deleted;
}
