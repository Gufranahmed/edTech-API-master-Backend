module.exports = mongoose => {
    const user = mongoose.model(
        "user",
        mongoose.Schema(
          {
            firstName: {type: String, required: true},
            lastName: String,
            email: { type : String , unique : true, required : true },
            password: {type: String, required: true},
            role: {type: String, default: 'user'}, /*types: admin ,user*/
            isLoggedIn: Boolean
          },
          { timestamps: true }
        )
      );
      //const user = mongoose.model("user", schema);
      return user;
    };