import React, { useState, FormEvent } from 'react';

import Input from 'components/Input';
import PageHeader from 'components/PageHeader';
import Select from 'components/Select';
import TeacherItem from 'components/TeacherItem';
import { TeacherItemProps } from 'components/TeacherItem/types';

import api from 'services/api';

import './styles.css';

const TeacherList: React.FC = () => {
  const [teachers, setTeachers] = useState<TeacherItemProps[]>([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  async function searchTeachers(e: FormEvent): Promise<void> {
    e.preventDefault();
    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time,
      },
    });

    setTeachers(response.data);
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select
            label="Matéria"
            name="subject"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Ciências', label: 'Ciências' },
              { value: 'Matemática', label: 'Artes' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'Física', label: 'Física' },
              { value: 'História', label: 'História' },
              { value: 'Português', label: 'Português' },
              { value: 'Química', label: 'Química' },
              { value: 'Educação Física', label: 'Educação Física' },
            ]}
          />
          <Select
            label="Dia da semana"
            name="week_day"
            value={week_day}
            onChange={(e) => {
              setWeekDay(e.target.value);
            }}
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sábado' },
            ]}
          />
          <Input
            label="Hora"
            name="time"
            type="time"
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />

          <button type="submit">Buscar</button>
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher) => (
          <TeacherItem
            key={teacher.id}
            id={teacher.id}
            name={teacher.name}
            avatar={teacher.avatar}
            bio={teacher.bio}
            cost={teacher.cost}
            subject={teacher.subject}
            whatsapp={teacher.whatsapp}
          />
        ))}
      </main>
    </div>
  );
};

export default TeacherList;
