module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        title: {type : String,require : true},
        description: String,
        skills : String,
        published: Boolean,
        priceInRupees : {type: Number, default: 5000, trim: true, min : 0, max: 30000},
        priceAfterDiscount : {type: Number, min : 0, max: 30000, trim: true},
        category : String
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Tutorial = mongoose.model("tutorial", schema);
    return Tutorial;
  };