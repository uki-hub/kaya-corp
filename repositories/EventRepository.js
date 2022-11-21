import axios from "axios";

const getEventInitializeData = async (eventId) => {
  const _payload = JSON.stringify({
    idevent: eventId,
  });

  var response = await fetch(
    "https://api.bantengseries.com//api/ticket/initialize.php",
    {
      method: "POST",
      body: _payload,
    }
  );

  const data = await response.json();

  return data;
};

const sendPembayaranEvent = async (payload) => {
  const _payload = JSON.stringify({
    // apiKey: "0ed365ed-daf4-4747-a7d8-5434dfbb33c3",
    ...payload,
  });

  var response = await fetch(
    "https://api.bantengseries.com//api/ticket/save.php",
    {
      method: "POST",
      body: _payload,
    }
  );


  const data = await response.json();

  return data;
};

export { getEventInitializeData, sendPembayaranEvent };
