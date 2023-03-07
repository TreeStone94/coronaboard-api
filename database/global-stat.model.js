const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define(
        'GlobalStat',
        {
            id: {
                autoIncrement: true,                // 값 자동 증가
                type: DataTypes.INTEGER.UNSIGNED,   // 부호 없는 정수(양의 정수)
                allowNull: false,                   // 빈 값 허용 X
                primaryKey: true                    // 기본키로 지정
            },
            cc: {
                type: DataTypes.CHAR(2),
                allowNull: false
            },
            date: {
                type: DataTypes.DATEONLY,
                allowNull: false
            },
        }
    )
}