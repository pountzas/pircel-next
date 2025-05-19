"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import HouseItem from "./HouseItem";
import { getHouses } from "@/actions/getHouses";
import Spinner from "./Spinner";
import Search from "./Search";
import { useSearchStore } from "@/store/store";

function HousesList() {
  const [houses, setHouses] = useState<House[]>([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const { searchHousesValue } = useSearchStore();

  const limit = 10;

  const observer = useRef<IntersectionObserver | null>(null);
  const lastHouseRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loading) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setOffset((prevOffset) => prevOffset + limit);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  useEffect(() => {
    setOffset(0);
    setHouses([]);
  }, [searchHousesValue]);

  useEffect(() => {
    const fetchHouses = async () => {
      setLoading(true);
      try {
        const newHouses = await getHouses(searchHousesValue, offset, limit);
        setHouses((prevHouses) =>
          offset === 0 ? newHouses : [...prevHouses, ...newHouses]
        );

        if (newHouses.length < limit) {
          setHasMore(false);
        } else {
          setHasMore(true);
        }
      } catch (error) {
        console.error("Error fetching houses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHouses();
  }, [offset, searchHousesValue]);

  return (
    <div className="flex flex-col space-y-8 pt-7 ">
      <div className=" pt-8  ">
        <Search />
      </div>
      {houses.length > 0 ? (
        houses.map((house, index) => {
          if (index === houses.length - 1) {
            return (
              <div className="pb-40" ref={lastHouseRef} key={house.id}>
                <HouseItem house={house} />
              </div>
            );
          } else {
            return <HouseItem key={house.id} house={house} />;
          }
        })
      ) : (
        <>
          <div className="min-w-[530px] min-h-[300px]"></div>
          {loading && <Spinner />}
        </>
      )}
    </div>
  );
}

export default HousesList;
