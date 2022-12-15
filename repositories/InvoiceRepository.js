const getInvoices = async (payload) => {
  const _payload = JSON.stringify({
    userid: "123",
  });

  var response = await fetch(
    "https://api.bantengseries.com/api/ticket/getInvoice.php",
    {
      method: "POST",
      body: _payload,
    }
  );

  const data = await response.json();

  return data;
};

export { getInvoices };
