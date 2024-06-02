"use client";
import React, { useState, useEffect } from "react";
import Searchpage from "@/components/Searchpage";
import Scrapeandstore from "@/lib/actions";
import Navbar from "@/components/Navbarp";

const Spage = ({ params }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await Scrapeandstore(params.id);
      setData(result);
      setLoading(false);
    };

    fetchData();
  }, [params.id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <Searchpage loading={loading} id={data} />
    </>
  );
};

export default Spage;
