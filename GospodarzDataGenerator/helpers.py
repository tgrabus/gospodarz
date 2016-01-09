__author__ = 'tgrabus'

import csv
import re


def convert_coord_to_float(degree, minutes, seconds):
    degree = float(degree)
    minutes = float(minutes)

    if seconds is None:
        seconds = 0
    else:
        seconds = float(seconds)

    return (seconds / 3600) + (minutes / 60) + degree


def save_converted_coord_to_file(source, target):
    with open(source, newline='', encoding='utf-8') as readFile:
        reader = csv.reader(readFile, delimiter=';')
        with open(target, 'w', newline='', encoding='utf-8') as writerFile:
            writer = csv.writer(writerFile, delimiter=';')
            for row in reader:
                regex = re.compile('(?P<degree>\d+)STP(?P<minutes>\d+)MIN(?P<seconds>\d+)?(SEC)?')
                result = regex.match(row[1])
                row[1] = convert_coord_to_float(result.group('degree'), result.group('minutes'),
                                                result.group('seconds'))
                result = regex.match(row[2])
                row[2] = convert_coord_to_float(result.group('degree'), result.group('minutes'),
                                                result.group('seconds'))
                writer.writerow(row)
