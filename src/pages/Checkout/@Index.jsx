import React, { useEffect } from "react";
import styles from "./@Index.module.css";
import Navbar from "./Containers/1Navbar";
import Section2 from "./Containers/Section2";
import { useParams, useNavigate } from "react-router-dom";

const box = [
  {
    id: "2c9380848ef387c7018ef824257a037e",
    name: "Box Star",
    lugares: "2 Lugares",
    price: "39,90",
    amount: 39.9,
    slug: "star2",
  },
  {
    id: "2c9380848ef3876b018ef824d6d10364",
    name: "Box Star",
    lugares: "4 Lugares",
    price: "59,90",
    amount: 59.9,
    slug: "star4",
  },
  {
    id: "2c9380848ef3876b018ef82556560365",
    name: "Box Star",
    lugares: "6 Lugares",
    price: "79,90",
    amount: 79.9,
    slug: "star6",
  },
  {
    id: "2c9380848ef387c7018ef825b0750380",
    name: "Box Star",
    lugares: "8 Lugares",
    price: "99,90",
    amount: 99.9,
    slug: "star8",
  },
  {
    id: "2c9380848ef38745018ef826039903ab",
    name: "Box Star",
    lugares: "12 Lugares",
    price: "139,90",
    amount: 139.9,
    slug: "star12",
  },
  {
    id: "2c9380848ef387c7018ef826a1020382",
    name: "Box Premium",
    lugares: "4 Lugares",
    price: "119,90",
    amount: 119.9,
    slug: "premium4",
  },
  {
    id: "2c9380848ef3876b018ef8270e7c0366",
    name: "Box Premium",
    lugares: "6 Lugares",
    price: "162,90",
    amount: 162.9,
    slug: "premium6",
  },
  {
    id: "2c9380848ef387c7018ef827a79c0384",
    name: "Box Premium",
    lugares: "8 Lugares",
    price: "204,90",
    amount: 204.9,
    slug: "premium8",
  },
  {
    id: "2c9380848ef38745018ef827f4d803ac",
    name: "Box Premium",
    lugares: "12 Lugares",
    price: "292,90",
    amount: 292.9,
    slug: "premium12",
  },
];

export default function Index() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const boxSelect = box.find((item) => {
    return item.slug === slug;
  });

  useEffect(() => {
    if (!boxSelect) {
      navigate("/");
    }
  }, [boxSelect, navigate]);

  return (
    <main className={styles.main}>
      <Navbar />
      {boxSelect && <Section2 box={boxSelect} />}
    </main>
  );
}
