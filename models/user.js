const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
    username: String,
    password: String,
    admin: { type: Boolean, default: false }
})

// 새로운 유저 생성
User.statics.create = function(username, password) {
    const user = new this({
        username,
        password
    })

    return user.save()
}

// username 값으로 유저 검색
User.statics.findOneByUsername = function(username) {
    return this.findOne({
        username
    }).exec()
}


// 비밀번호 인증
User.methods.verify = function(password) {
    return this.password === password
}

//관리자 지정
User.methods.assignAdmin = function() {
    this.admin = true
    return this.save()
}

module.exports = mongoose.model('User', User)