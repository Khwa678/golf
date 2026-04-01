router.post("/webhook", express.raw({type: "application/json"}), async (req,res)=>{
  const event = req.body;

  if(event.type === "checkout.session.completed"){
    const session = event.data.object;

    const userId = session.metadata.userId;
    const plan = session.metadata.plan;

    const user = await User.findById(userId);

    user.subscription.status = "active";
    user.subscription.plan = plan;

    const days = plan === "yearly" ? 365 : 30;

    user.subscription.expiry = new Date(Date.now() + days*24*60*60*1000);

    await user.save();
  }

  res.json({received:true});
});