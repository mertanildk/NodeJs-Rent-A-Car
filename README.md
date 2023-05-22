# NodeJs-Rent-A-Car
Learing nodejs

CRUD işlemlerinde Mongoose Asenkron(async / await) yapısını kullanmayı zorunlu tutar.
Yeni gelen güncelleme ile Create ve Update işlemlerinden sonra oluşturulan data direkt 

res.status(200).json({message:"Car created successfully"},data) şeklinde dönüş yapmaya izin vermez.
res.status(200).json({message:"Car created successfully"}) bu şekilde izin vermektedir.


return await carModel.findByIdAndUpdate(id,{isActive:false},{new:true}) buradaki (new:true) anlamı;
{ new: true } seçeneği, findByIdAndUpdate işlevini çağırdığınızda güncellenen belgeyi döndürmek için kullanılır.
Varsayılan olarak, findByIdAndUpdate işlevi güncellenmeden önceki belgeyi döndürür. Ancak { new: true } seçeneğini kullanarak, güncellenmiş belgeyi alabilirsiniz.

Eğerki controller katmanında <field> not found gibi bir hata ile karşılaşılırsa çözüm yolu olarak : index.js içerisine app.use(express.json()); eklenir
Bu şekilde controllerdan gelen post request body'deki json türündeki veriyi sorunsuzca alabiliyoruz.

