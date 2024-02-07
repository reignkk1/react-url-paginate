import styled from "@emotion/styled";
import type {
  NavigateFunction,
  LinkProps,
  URLSearchParamsInit,
  SetURLSearchParams,
  Location,
} from "react-router-dom";

interface PaginationProps {
  prevLabel: string;
  nextLabel: string;
  total: number;
  pageItems: number;
  router: {
    useNavigate(): NavigateFunction;
    Link: React.ForwardRefExoticComponent<
      LinkProps & React.RefAttributes<HTMLAnchorElement>
    >;
    useSearchParams(
      defaultInit?: URLSearchParamsInit
    ): [URLSearchParams, SetURLSearchParams];
    useLocation(): Location;
  };
}

export default function Pagination({
  prevLabel,
  nextLabel,
  total,
  pageItems,
  router,
}: PaginationProps) {
  const { useSearchParams, useNavigate, Link, useLocation } = router;
  const pageTotal = Math.ceil(total / pageItems);
  const numbers = Array.from({ length: pageTotal }, (_, pageNumber) =>
    String(pageNumber + 1)
  );

  const { search } = useLocation();
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || "1";
  const navigate = useNavigate();
  const pageNumbers = numbers.slice(
    0 + 10 * (Math.ceil(Number(page) / 10) - 1),
    10 * Math.ceil(Number(page) / 10)
  );

  const activePrevButton = !pageNumbers.includes(numbers[0]);
  const activeNextButton = !pageNumbers.includes(numbers[numbers.length - 1]);

  const getLinkPageButton = (pageNumber: string) => {
    if (search === "") {
      return `?page=${pageNumber}`;
    } else if (search.includes("page")) {
      return search.replace(`page=${page}`, `page=${pageNumber}`);
    } else {
      return search + `&page=${pageNumber}`;
    }
  };

  const handleClickNext = () => {
    navigate(getLinkPageButton(String(Number(pageNumbers?.slice(-1)) + 1)));
  };

  const handleClickPrev = () => {
    navigate(getLinkPageButton(String(Number(pageNumbers?.slice(0, 1)) - 1)));
  };

  const pageButtons = pageNumbers?.map((pageNumber) => {
    const active = pageNumber === page;
    return (
      <ListItem key={pageNumber} active={active}>
        <Link to={getLinkPageButton(pageNumber)}>{pageNumber}</Link>
      </ListItem>
    );
  });

  return (
    <Container>
      <FlexButton onClick={handleClickPrev} active={activePrevButton}>
        {prevLabel}
      </FlexButton>
      <List>{pageButtons}</List>
      <FlexButton onClick={handleClickNext} active={activeNextButton}>
        {nextLabel}
      </FlexButton>
    </Container>
  );
}

function FlexButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  let button;

  if (active) {
    button = <Button onClick={onClick}>{children}</Button>;
  } else {
    button = <Button style={{ opacity: "0", cursor: "default" }}></Button>;
  }

  return button;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  ul,
  li {
    list-style: none;
  }
`;

const List = styled.ul`
  display: flex;
  margin: 0px 20px;
`;

const ListItem = styled.li<{ active: boolean }>`
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    border-radius: 5px;
    width: 30px;
    height: 30px;
    margin-right: 5px;
    background-color: ${(props) => (props.active ? "#eaedf4" : "none")};
    border: ${(props) => (props.active ? "1px solid rgba(0,0,0,0.3)" : "none")};
    cursor: pointer;
    text-decoration: none;
    &:hover {
      background-color: #eaedf4;
    }
    opacity: 0.7;
  }
`;

const Button = styled.button`
  width: 60px;
  border: none;
  background-color: white;
  border-radius: 5px;
  &:hover {
    background-color: #eaedf4;
  }
  cursor: pointer;
`;
