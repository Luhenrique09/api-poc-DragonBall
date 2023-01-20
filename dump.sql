--
-- PostgreSQL database dump
--

-- Dumped from database version 12.13 (Ubuntu 12.13-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.13 (Ubuntu 12.13-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: characters; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.characters (
    id integer NOT NULL,
    name text NOT NULL,
    level integer NOT NULL,
    transformations integer NOT NULL,
    image text NOT NULL
);


--
-- Name: characters_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.characters_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: characters_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.characters_id_seq OWNED BY public.characters.id;


--
-- Name: characters id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.characters ALTER COLUMN id SET DEFAULT nextval('public.characters_id_seq'::regclass);


--
-- Data for Name: characters; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.characters VALUES (1, 'Goku', 8001, 6, 'https://sm.ign.com/ign_br/screenshot/default/goku_an6e.jpg');
INSERT INTO public.characters VALUES (2, 'Vegeta', 7000, 4, 'https://upload.wikimedia.org/wikipedia/pt/a/ac/Vegeta.jpg');
INSERT INTO public.characters VALUES (3, 'Piccolo', 3020, 1, 'https://upload.wikimedia.org/wikipedia/pt/thumb/d/d1/Piccolo_Jr.jpg/220px-Piccolo_Jr.jpg');
INSERT INTO public.characters VALUES (4, 'Bills', 500000, 2, 'https://criticalhits.com.br/wp-content/uploads/2021/01/Bills-Dragon-Ball-910x527.jpg');
INSERT INTO public.characters VALUES (5, 'Majin boo', 1000, 3, 'https://kanto.legiaodosherois.com.br/w728-h381-gnw-cfill-gcc-f:fbcover/wp-content/uploads/2021/12/legiao_PkIrOyHTvUoa.jpg.webp');


--
-- Name: characters_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.characters_id_seq', 5, true);


--
-- Name: characters characters_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.characters
    ADD CONSTRAINT characters_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

