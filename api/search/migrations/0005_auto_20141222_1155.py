# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('search', '0004_auto_20141125_2316'),
    ]

    operations = [
        migrations.CreateModel(
            name='Localization',
            fields=[
                ('id', models.AutoField(auto_created=True, verbose_name='ID', serialize=False, primary_key=True)),
                ('positionX', models.FloatField()),
                ('positionY', models.FloatField()),
                ('street', models.CharField(null=True, max_length=100, blank=True)),
                ('city', models.ForeignKey(null=True, to='search.City', blank=True)),
                ('farmer', models.ForeignKey(to='search.Farmer')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.RemoveField(
            model_name='farmer',
            name='positionX',
        ),
        migrations.RemoveField(
            model_name='farmer',
            name='positionY',
        ),
    ]
