const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define(
        'KeyValue',
        {
            id: {
                autoIncrement: true,                // 값 자동 증가
                type: DataTypes.INTEGER.UNSIGNED,   // 부호 없는 정수(양의 정수)
                allowNull: false,                   // 빈 값 허용 X
                primaryKey: true                    // 기본키로 지정
            },
            key: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            value: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
        },
        {
            sequelize,                  // 시퀄라이즈 인스턴스
            tableName: 'KeyValue',    // 데이터베이스에서 테이블의 이름
            indexes: [                  // 테이블 인덱스
                {
                    name: 'PRIMARY',
                    unique: true,
                    fields: [{name: 'id'}]
                },
                {
                    name: 'key',
                    unique: true,
                    fields: [{name: 'key'}]
                }
            ],
            timestamps: false,          // 타임스태탬프 속성 자동 생성 X
        }
    )
}