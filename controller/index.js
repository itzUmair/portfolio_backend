const getResume = async (req, res) => {
  // try {
  //   const pdfUrl =
  //     "https://firebasestorage.googleapis.com/v0/b/portfolio-b576f.appspot.com/o/Umair_CV%20(1).pdf?alt=media&token=63a6b067-8ad1-41eb-9d1a-7ba1867fd9d9";
  //   const pdfResponse = await fetch(pdfUrl);
  //   const pdfBuffer = await pdfResponse.arrayBuffer();

  //   res.set("Content-Type", "application/pdf");
  //   res.set("Content-Disposition", 'inline; filename="Umair_CV.pdf"');
  //   res.set("Access-Control-Allow-Origin", "*");
  //   res.send(Buffer.from(pdfBuffer));
  // } catch (error) {
  //   console.error("Error fetching PDF:", error);
  //   res.status(500).send("Error fetching PDF");
  // }
  res
    .status(200)
    .send({
      data: "https://firebasestorage.googleapis.com/v0/b/portfolio-b576f.appspot.com/o/Umair_CV%20(1).pdf?alt=media&token=63a6b067-8ad1-41eb-9d1a-7ba1867fd9d9",
    });
};

export { getResume };
