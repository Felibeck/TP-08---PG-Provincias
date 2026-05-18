--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2
-- Dumped by pg_dump version 16.2

-- Started on 2026-05-18 09:56:35

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
-- TOC entry 216 (class 1259 OID 16400)
-- Name: provincias; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.provincias (
    id integer NOT NULL,
    nombre character varying,
    full_name character varying,
    latitude numeric,
    longitude numeric,
    display_order integer
);


ALTER TABLE public.provincias OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 16399)
-- Name: provincias_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.provincias ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.provincias_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 4780 (class 0 OID 16400)
-- Dependencies: 216
-- Data for Name: provincias; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.provincias OVERRIDING SYSTEM VALUE VALUES (1, 'Buenos Aires', 'Provincia de Buenos Aires', -36.6769, -60.5588, 1);
INSERT INTO public.provincias OVERRIDING SYSTEM VALUE VALUES (2, 'Catamarca', 'Provincia de Catamarca', -28.4696, -65.7852, 2);
INSERT INTO public.provincias OVERRIDING SYSTEM VALUE VALUES (3, 'Chaco', 'Provincia del Chaco', -27.4514, -58.9867, 3);
INSERT INTO public.provincias OVERRIDING SYSTEM VALUE VALUES (4, 'Chubut', 'Provincia del Chubut', -43.3002, -65.1023, 4);
INSERT INTO public.provincias OVERRIDING SYSTEM VALUE VALUES (5, 'Córdoba', 'Provincia de Córdoba', -31.3993, -64.2644, 5);
INSERT INTO public.provincias OVERRIDING SYSTEM VALUE VALUES (6, 'Corrientes', 'Provincia de Corrientes', -27.4806, -58.8341, 6);
INSERT INTO public.provincias OVERRIDING SYSTEM VALUE VALUES (7, 'Entre Ríos', 'Provincia de Entre Ríos', -32.0589, -59.2013, 7);
INSERT INTO public.provincias OVERRIDING SYSTEM VALUE VALUES (8, 'Formosa', 'Provincia de Formosa', -24.8958, -60.2195, 8);
INSERT INTO public.provincias OVERRIDING SYSTEM VALUE VALUES (9, 'Jujuy', 'Provincia de Jujuy', -23.3193, -65.7642, 9);
INSERT INTO public.provincias OVERRIDING SYSTEM VALUE VALUES (10, 'La Pampa', 'Provincia de La Pampa', -36.6167, -64.2833, 10);
INSERT INTO public.provincias OVERRIDING SYSTEM VALUE VALUES (11, 'La Rioja', 'Provincia de La Rioja', -29.4131, -66.8558, 11);
INSERT INTO public.provincias OVERRIDING SYSTEM VALUE VALUES (12, 'Mendoza', 'Provincia de Mendoza', -32.8895, -68.8458, 12);
INSERT INTO public.provincias OVERRIDING SYSTEM VALUE VALUES (13, 'Misiones', 'Provincia de Misiones', -27.3671, -55.8961, 13);
INSERT INTO public.provincias OVERRIDING SYSTEM VALUE VALUES (14, 'Neuquén', 'Provincia del Neuquén', -38.9516, -68.0591, 14);
INSERT INTO public.provincias OVERRIDING SYSTEM VALUE VALUES (15, 'Río Negro', 'Provincia de Río Negro', -40.8261, -63.0000, 15);
INSERT INTO public.provincias OVERRIDING SYSTEM VALUE VALUES (16, 'Salta', 'Provincia de Salta', -24.7821, -65.4232, 16);
INSERT INTO public.provincias OVERRIDING SYSTEM VALUE VALUES (17, 'San Juan', 'Provincia de San Juan', -31.5375, -68.5364, 17);
INSERT INTO public.provincias OVERRIDING SYSTEM VALUE VALUES (18, 'San Luis', 'Provincia de San Luis', -33.2950, -66.3356, 18);
INSERT INTO public.provincias OVERRIDING SYSTEM VALUE VALUES (19, 'Santa Cruz', 'Provincia de Santa Cruz', -51.6230, -69.2168, 19);
INSERT INTO public.provincias OVERRIDING SYSTEM VALUE VALUES (20, 'Santa Fe', 'Provincia de Santa Fe', -31.6333, -60.7000, 20);
INSERT INTO public.provincias OVERRIDING SYSTEM VALUE VALUES (21, 'Santiago del Estero', 'Provincia de Santiago del Estero', -27.7834, -64.2642, 21);
INSERT INTO public.provincias OVERRIDING SYSTEM VALUE VALUES (22, 'Tierra del Fuego', 'Provincia de Tierra del Fuego, Antártida e Islas del Atlántico Sur', -54.8019, -68.3030, 22);
INSERT INTO public.provincias OVERRIDING SYSTEM VALUE VALUES (23, 'Tucumán', 'Provincia de Tucumán', -26.8241, -65.2226, 23);
INSERT INTO public.provincias OVERRIDING SYSTEM VALUE VALUES (24, 'CABA', 'Ciudad Autónoma de Buenos Aires', -34.6037, -58.3816, 24);


--
-- TOC entry 4786 (class 0 OID 0)
-- Dependencies: 215
-- Name: provincias_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.provincias_id_seq', 24, true);


--
-- TOC entry 4635 (class 2606 OID 16406)
-- Name: provincias provincias_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.provincias
    ADD CONSTRAINT provincias_pk PRIMARY KEY (id);


-- Completed on 2026-05-18 09:56:35

--
-- PostgreSQL database dump complete
--

